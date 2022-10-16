// to delete a post 

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");

//@desc To delete a post 
//@url DELETE api/v1/post/:postid
//@access Private 

exports.deletePost = asynchandler(async (req,res,next)=>{
    try{
    if(!req.params.postid) return next(new ErrorHandler("postid parameter no found",404))    
    const result = await client.posts.findFirst({
        where:{
            id:req.params.postid,
            
        },
        select:{
            profileid:true,
            comments:{
                select:{
                    id:true
                }
            },
            
            _count:{
                select:{
                    likes:true,
                    comments:true,
                    hashtag:true
                }
            }
            
        } 
    })
    
    

    if(!result) return next(new ErrorHandler("the  post not found",425))
    if(result.profileid != req.user.id) return next(new ErrorHandler("not autherized",420))
     
    if(result._count.likes > 0) {
       await client.like.deleteMany({
        where:{
            postid:req.params.postid,
        }
       })

    }
    if(result._count.comments>0){
        try{
        await client.commentLike.deleteMany({
            where:{
                commentid:{
                    in:result.comments
                }
            }
        })
        }catch(err) {}
        try{
         await client.reply.deleteMany({
            where:{
                commentid:{
                    in:result.comments
                }
            }
         })
        }
        catch(err){}
        await client.comments.deleteMany({
            where:{
                postid: req.params.postid
            }
        })

    }
    
    const post = await client.posts.delete({ where:{id:req.params.postid}})
    
    if(!post) return next(new ErrorHandler("deletion failed",500))

    
    res.status(200).json({
        status:true,
        msg:"deletion completed ",
        result,
        post

    })
}catch(err) {return next(new ErrorHandler(err.message,500))}
})