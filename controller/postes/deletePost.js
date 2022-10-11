// to delete a post 

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");

//@desc To delete a post 
//@url DELETE api/v1/post/delete/:postid
//@access Private 

exports.deletePost = asynchandler(async (req,res,next)=>{
    try{
    const result = await client.posts.findFirst({
        where:{
            id:req.params.postid,
            profileid:req.user.id
        },
        select:{
            comments:{
                select:{
                    id
                }
            }
        }
    })
    if(!result) return next(new ErrorHandler("cannot delete other user posts",425))
    //delete all commment 
    const plike = client.like.deleteMany({where:{postid:req.body.postid}}) 
    const like = client.commentLike.deleteMany({
        where:{ commentid:{
            in:result.comments
        }}
    })
    const reply = client.replay.deleteMany({
        where:{ commentid:{
            in:result.comments
        }}
    })
    const comment = client.comments.deleteMany({
        where:{
            postid:req.params.postid
         }
    })
    const post = client.posts.delete({ where:{id:req.params.postid}})
    const del = client.$transaction([plike,like,reply,comment,post])
    if(!del) return next(new ErrorHandler("deletion failed",500))
    res.status(200).json({
        status:true,
        msg:"deletion completed "
    })
}catch(err) {return next(new ErrorHandler(err.message,500))}
})