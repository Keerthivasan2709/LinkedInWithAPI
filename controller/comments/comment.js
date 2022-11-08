
const client = require('../../utils/database')
const ErrorResponse = require('../../utils/errorhandler')
const asynchandler = require('../../middleware/asynchandler')
const { activityUpdate } = require('../../utils/activityManager')
const e = require('express')


//@desc to update the comment 
//@url  PATCH api/v1/post/comment/update/:cid
//@access Private 

exports.updateComment = asynchandler(async (req,res,next)=>{
    const data  = await client.comments.updateMany({
        where:{
            id:req.params.cid,
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
        msg:"comment updated"
    })
}),


//@desc To Get all comment for the post 
//@url  GET api/v1/post/comment/:postid
//@access Private 
exports.getComments = asynchandler(async (req,res,next)=>{
    const data  = await client.posts.findUnique({
        where:{
            id:req.params.postid
        },
        include:{
            comments:true,
            
        },
    });
    
    if(!data) return next(new ErrorResponse("Unable to get data check the credentials ",403))
    if(data.comments.length>0){
        for await(let ele of data.comments){
        const count  = await client.comments.findFirst({
            where:{
                id:ele.id,
            },
            include:{
                _count:{
                    select:{
                        liked:true,
                        replays:true
                    }
                }
            }
        })
        const profile  = await client.profile.findFirst({
            where:{id:ele.userid},
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
                }
            }
        })
        ele.profile = profile;
        ele.replys = count._count.replays
        ele.likes  = count._count.liked
    }  
    } 
    res.status(200).json({
        status:true,
        count:data.length,
        comment_count:data.comments.length,
        data
    })
})







//@desc To delete a comment 
//@url DELETE  api/v1/post/comment/delete/:cid
//@access Private (only auther can do it)

exports.deleteComment = asynchandler(async (req,res,next)=>{
    const like = client.commentLike.deleteMany({
        where:{ commentid:req.params.cid}
    })
    const replay = client.replay.deleteMany({
        where:{ commentid:req.params.cid}
    })
    const comment = client.comments.deleteMany({
        where:{
            id:req.params.cid,
            userid:req.user.id 
             
        }
    })
    
    const trans = await client.$transaction([like,replay,comment])
    if(!trans) {
    res.status(200)
       .json({
        status:false,
        msg:"deletion failed",
        err:err.message
        }) 
    }
    else{
        res.status(200)
        .json({
         status:true,
         msg:"the comment deleted",
        }) 
    }
})


//@desc to add comment to the post 
//@url  POST api/v1/post/comment
//@access Private 

exports.setComment  = asynchandler(async (req,res,next)=>{
    try{
    
    const data = await  client.comments.create({
        data:{
            description:req.body.description,
            comment:{
                connect:{
                    id:req.body.id
            },
        },
            usercomment:{
                connect:{
                    id:req.user.id
                }
            }
        }
    })
    if(!data) return next(new ErrorResponse("Problem in storing",423))
    await activityUpdate({
       userid:req.user.id,
       tagerid:data.id,
       message:"added comment on the post",
       type:"comment"
    })
    res.status(200).json({status:true})
}catch(err) {return next(new ErrorResponse(err.message,500))}
})