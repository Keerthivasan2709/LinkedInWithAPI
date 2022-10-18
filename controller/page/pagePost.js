// [imp] only the page creater can post 

const asynchandler = require("../../middleware/asynchandler");

const client = require("../../utils/database");
const ErrorResponse = require("../../utils/errorhandler");

//@desc To create the post for the page 
//@url  POST api/v1/page/post
//@access Private 

exports.createPagePosts = asynchandler(async (req,res,next)=>{
    try {
     
      if(!req.page.role) return next(new ErrorResponse("middleware error",500))
      if(!req.page.role=="editor")  return next(new ErrorResponse("Not authorized",420))
      let {
        id,
        description,
        title,
        data,
        }     = req.body
        //checking the user 
      
    //create the post 
    const post = await client.pagePost.create({
      
    })
    res.status(200).json({status:true,data:post})

 

    } catch (err) {
        return next(new ErrorResponse(err.message,402))
    }
})
