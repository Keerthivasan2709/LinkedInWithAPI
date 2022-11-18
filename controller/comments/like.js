const client = require('../../utils/database')
const ErrorResponse = require('../../utils/errorhandler')
const asynchandler = require('../../middleware/asynchandler')

//@desc to like a comment 
//@url POST api/v1/post/comment/like/:cid
//@access Private 

exports.likeComment = asynchandler(async (req,res,next)=>{

      try{
        if(!req.params.cid) return next(new ErrorResponse('postid field required in body',404))
        try{ 
       let data  = await client.commentLike.delete({
           where:{
               commentid_userid:{
                commentid:req.params.cid,
                userid:req.user.id,
               }
           }
        })
        return res.status(200).json({status:true,like:false})
       }catch(error){
        data = await client.commentLike.create({
           data:{
               likedby:{
                   connect:{ 
                   id:req.user.id,
                   }
               },
               commentlike:{
                   connect:{
                       id:req.params.cid,
                   }
               },
           }
        })
        if(!data) return next(new ErrorResponse("unable to perform the requested operation",500))
        const taget  = await client.comments.findFirst({
            where:{
                id:req.params.cid,
            },
            select:{
                usercomment:{
                    select:{
                        id:true,
                    }
                },
                comment:{
                    select:{
                        id:true
                    }
                }
            }
        })
        const profile  = await client.profile.findFirst({where:{id:req.user.id},select:{profilepic:true}})
        await client.activity.create({
            data:{
                useractivity:{
                    connect:{
                        id:req.user.id
                    }

                },
                message:"liked your comment",
                type:"comment",
                targetid:taget.comment.id,
                belongsTo:taget.usercomment.id,
                tagetpic:profile.profilepic

            }
        })
        res.status(200).json({
           status:true,
           like:true
   
        })  
       }
      }catch(err){return next(new ErrorResponse(err.message,500))}
        
    })

//@desc To view all likes for a comment 
//@url  GET POST api/v1/post/comment/like/:cid
//@access Private 

exports.getLike = asynchandler(async (req,res,next)=>{
    console.log(req.params.cid)
    const data = await client.comments.findUnique({
        where:{
            id:req.params.cid
        },
        include:{
            liked:true,
            _count:{
                select:{
                    liked:true,

                }
            }
        }

    })
    console.log(data)
    if(!data) return next(new ErrorResponse("Unable to get data check the credentials ",403))
    res.status(200).json({
        status:true,
        data
    })

})


//@desc To like the replay
//@url  POST api/v1/replay/like/:id
//@access private 


exports.likeReplay  = asynchandler( async (req,res,next)=>{

    try {
        if(!req.params.id) return next(new ErrorResponse('postid field required in body',404))
        try{ 
       let data  = await client.replyLike.delete({
           where:{
               replyid_userid:{
                replyid:req.params.id,
                userid:req.user.id
               }
           }
        })
        return res.status(200).json({status:true,like:false})
       }catch(error){
        let data = await client.replyLike.create({
           data:{
               likedby:{
                   connect:{ 
                   id:req.user.id,
                   }
               },
               reply:{
                   connect:{
                       id:req.params.id,
                   }
               },
           }
        })
        if(!data) return next(new ErrorResponse("unable to perform the requested operation",500))
        const target = await client.reply.findFirst({
            where:{
                id:req.user.id,
            },
            select:{
                replay:{
                   
                   select:{
                     id:true,   
                     userid:true,
                   }   
                }
            }
        })
        const profile = await client.profile.findFirst({
            where:{
                id:req.user.id,
            },
            select:{
                profilepic:true
            }
        })
        await client.activity.create({
            data:{
                useractivity:{
                    connect:{
                        id:req.user.id
                    }

                },
                message:"liked your comment",
                type:"comment",
                targetid:target.replay.id,
                belongsTo:target.replay.userid,
                tagetpic:profile.profilepic

            }
        })
        res.status(200).json({
           status:true,
           like:true
   
        })  
     } 
        
    } catch (err) {
        return next(new ErrorResponse(err.message,500))
    }

})


    