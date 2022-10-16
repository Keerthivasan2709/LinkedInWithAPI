const asynchandler = require('../../middleware/asynchandler')
const client = require("../../utils/database")
const ErrorResponse = require("../../utils/errorhandler")

//@decs  Put like the post
//@url   POST api/v1/post/like
//@access Private 


exports.like = asynchandler(async (req,res,next)=>{
   try{
    if(!req.body.postid) return next(new ErrorResponse('postid field required in body',404))
     try{ 
    let data  = await client.like.delete({
        where:{
            postid_userid:{
                userid:req.user.id, 
                postid:req.body.postid,
            }
        }
     })
     return res.status(200).json({status:true,like:false})
    }catch(error){
     data = await client.like.create({
        data:{
            likedby:{
                connect:{ 
                id:req.user.id,
                }
            },
            like:{
                connect:{
                    id:req.body.postid,
                }
            },
        }
     })
     if(!data) return next(new ErrorResponse("unable to perform the requested operation",500))
     res.status(200).json({
        status:true,
        like:true

     })  
    }
    }
    catch(err) {return next(new ErrorResponse(err.message,500))}  
    
})
