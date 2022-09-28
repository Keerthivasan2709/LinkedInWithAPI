// creatinf the controller for comment 
const client = require('../utils/database')
const {protect} = require('../middleware/auth')
const ErrorResponce = require('../utils/errorhandler')
const asynchandler = require('../middleware/asynchandler')
const object = {}

//@desc to add comment to the post 
//@url  POST api/v1/post/comment/:postid
//@access Private 

object.setComment  = asynchandler(async (req,res,next)=>{
    const data = await client.posts.update({
        where:{
            id:req.params.postid,
        },
        data:{
            comments:{
                create:{
                    description:req.body.description,
                    userid:req.user.id,
                    }
            }
        }
    })
    if(!data) return next(new ErrorResponce("Problem in storing",423))
    res.status(200).json({status:true})
})

//@desc to provide repaly for the comment 
//@url POST api/v1/post/comment/replay/:cid
//@access Private 

object.setReplay = asynchandler(async (req,res,next)=>{
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
    if(!data) return next(new ErrorResponce("the replay not sent"))
    res.status(200).json({
        status:true,
        msg: "replay sent"
    })
})

//@desc to update the comment 
//@url  PATCH api/v1/post/comment/update/:cid
//@access Private 

object.updateComment = asynchandler(async (req,res,next)=>{
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
    if(!data) return next(new ErrorResponce("failed to update",457))
    res.status(200).json({
        status:true,
        msg:"comment updated"
    })
}),

//@des to like a comment 
//@url POST api/v1/post/comment/like/:cid
//@access Private 

object.likeComment = asynchandler(async (req,res,next)=>{
///
const data  = await client.comments.findFirst({
    where:{
        id:req.params.cid,
        },
    select:{
        liked: {
            where:{
                userid:req.user.id 
            },
            select:{
                id:true
            }
        },
    },
})
if(!data){
    client.comments.update({
        where:{
           id:req.params.cid
        },
        data:{
            liked:{
               create:{
                   userid:req.user.id,
                   type:req.body.type
               }
            }
        }
    })
    .then(result=> res.status(200).json({liked:true}))
    .catch(err=> res.status(458).json({status:false})) 
}
else{
    console.log(data.liked.length)
    if (data.liked.length == 0){
        client.comments.update({
            where:{
               id:req.params.cid
            },
            data:{
                liked:{
                   create:{
                       userid:req.user.id,
                       type:req.body.type
                   }
                }
            }
        })
        .then(result=> res.status(200).json({liked:true}))
        .catch(err=> res.status(458).json({status:false,msg:err.message})) 
             
    }
    else{

    client.commentLike.delete({
         where:{
            id:data.liked[0].id 
         }
    })
    .then(result => res.status(200).json({liked:false}))
    .catch(err => res.status(451).json({status:false,msg:err.message}))
}
 }
///
    
})

//@desc To Get all comment for the post 
//@url  GET api/v1/post/comment/:postid
//@access Private 

object.getComments = asynchandler(async (req,res,next)=>{
    const data  = await client.posts.findUnique({
        where:{
            id:req.params.postid
        },
        include:{
            comments:true,
        },
    });
    
    if(!data) return next(new ErrorResponce("Unable to get data check the credentials ",403))
    res.status(200).json({
        status:true,
        count:data.length,
        comment_count:data.comments.length,
        data
    })
})

//@desc To view all replay for a comment 
//@url  GET api/v1/post/comment/replay/:cid
//@access Private 

object.getReplay = asynchandler(async (req,res,next)=>{
    const data = await client.comments.findUnique({
        where:{
            id:req.params.cid
        },
        include:{
            replays:true
        }
    })
    if(!data) return next(new ErrorResponce("Unable to get data check the credentials ",403))
    res.status(200).json({
        status:true,
        replay_count:data.replays.count,
        data
    })

})

//@desc To view all likes for a comment 
//@url  GET POST api/v1/post/comment/like/:cid
//@access Private 

object.getLike = asynchandler(async (req,res,next)=>{
    console.log(req.params.cid)
    const data = await client.comments.findUnique({
        where:{
            id:req.params.cid
        },
        include:{
            liked:true,
        }

    })
    console.log(data)
    if(!data) return next(new ErrorResponce("Unable to get data check the credentials ",403))
    res.status(200).json({
        status:true,
        like_count:data.liked.length,
        data
    })

})

//@desc To delete a comment 
//@url DELETE  api/v1/post/comment/delete/:cid
//@access Private (only auther can do it)

object.deleteComment = asynchandler(async (req,res,next)=>{
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
//@desc To delete a replay to comment
//@url DELETE api/v1/post/comment/replay/delete/:rid
//@access Private(only auther can delete it)
object.deleteReplay = asynchandler(async (req,res,next)=>{
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

object.updateReplay = asynchandler(async (req,res,next)=>{
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
    if(!data) return next(new ErrorResponce("failed to update",457))
    res.status(200).json({
        status:true,
        msg:"replay updated"
    })
})

//freezing the objects for the security 
Object.freeze(object)

//exporting the controller object
module.exports = object