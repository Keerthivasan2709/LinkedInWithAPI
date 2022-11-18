const client = require('../../utils/database')
const ErrorResponse = require('../../utils/errorhandler')
const asynchandler = require('../../middleware/asynchandler')

//@desc to provide repaly for the comment 
//@url POST api/v1/post/comment/replay/:cid
//@access Private 

exports.setReply = asynchandler(async (req,res,next)=>{
    const data  = await client.comments.update({
        where:{
            id:req.params.cid,
        },
        data:{
            replays:{
                create:{
                    userid:req.user.id,
                    description:req.body.description
                }
            }
        }
    })
    if(!data) return next(new ErrorResponse("the replay not sent"))
    const target = await client.comments.findFirst({
        where:{
            id:req.params.cid,
        },
        select:{
            comment:{
                select:{
                    id:true,
                    userpost:{
                        select:{
                            id:true
                        }
                    }
                }
            }
        }
    })
    const profile = await client.profile.findFirst({where:{id:req.user.id},select:{profilepic:true}});
    await client.activity.create({
        data:{
            useractivity:{
                connect:{
                    id:req.user.id,
                }
            },
            type:"replay",
            message:"replayed to your comment",
            targetid:target.comment.id,
            belongsTo:target.comment.userpost.id,
            tagetpic:profile.profilepic
        }

    })
    res.status(200).json({
        status:true,
        msg: "replay sent"
    })
})

//@desc To view all replay for a comment 
//@url  GET api/v1/post/comment/replay/:cid
//@access Private 

exports.getReply = asynchandler(async (req,res,next)=>{
    const data = await client.comments.findUnique({
        where:{
            id:req.params.cid
        },
        include:{
            replays:true
        }
    })
    if(!data) return next(new ErrorResponse("Unable to get data check the credentials ",403))
    for await (ele of data.replays){
        const profile  = await client.profile.findFirst({
            where:{
                id:ele.userid
            },
            select:{
                profilepic:true,
                firstName:true,
                lastName:true,
                companys:{
                    where:{
                        status:"working",
                    },
                    select:{
                        position:true
                    }
                },

            }
            

        })
        ele.profile = profile
    }
    res.status(200).json({
        status:true,
        replay_count:data.replays.count,
        data
    })

})

//@desc To delete a replay to comment
//@url DELETE api/v1/post/comment/replay/delete/:rid
//@access Private(only auther can delete it)
exports.deleteReply = asynchandler(async (req,res,next)=>{
    client.replay.deleteMany({
        where:{
            id:req.params.rid,
            userid:req.user.id 
        }
    })
    .then(result => res.status(200)
                       .json({
                        status:true,
                        msg:"the replay deleted",
                       }))
    .catch(err=> res.status(200)
                    .json({
                        status:false,
                        msg:"deletion failed"
                    }))
})


//@desc To update the replay 
//@url PATCH api/v1/post/comment/replay/update/:rid
//@access Private( auther can only access)

exports.updateReply = asynchandler(async (req,res,next)=>{
    const data  = await client.replay.updateMany({
        where:{
            id:req.params.rid,
            userid:req.user.id,
        },
        data:{
            description:req.body.description,
            createdAt: new Date(Date.now())
        }
    })
    if(!data) return next(new ErrorResponse("failed to update",457))
    res.status(200).json({
        status:true,
        msg:"replay updated"
    })
})



