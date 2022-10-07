const asynchandler = require('../../middleware/asynchandler')
const client = require("../../utils/database")
const ErrorResponse = require("../../utils/errorhandler")

//@decs  Put like the post
//@url   POST api/v1/post/like/:postid
//@access Private 


exports.like = asynchandler(async (req,res,next)=>{
   
    const data  = await client.posts.findFirst({
        where:{
            id:req.params.postid,
            profileid:{
                not:req.user.id 
            }
        },
        select:{
            likes: {
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
        client.posts.update({
            where:{
               id:req.params.postid
            },
            data:{
                likes:{
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
        if (data.likes.length == 0){
            client.posts.update({
                where:{
                   id:req.params.postid
                },
                data:{
                    likes:{
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

        client.like.delete({
             where:{
                id:data.likes[0].id 
             }
        })
        .then(result => res.status(200).json({liked:false}))
        .catch(err => res.status(451).json({status:false,msg:err.message}))
    }
     }
    
})
