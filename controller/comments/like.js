const client = require('../../utils/database')
const ErrorResponce = require('../../utils/errorhandler')
const asynchandler = require('../../middleware/asynchandler')

//@desc to like a comment 
//@url POST api/v1/post/comment/like/:cid
//@access Private 

exports.likeComment = asynchandler(async (req,res,next)=>{

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

    