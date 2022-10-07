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
      const check = await client.page.findFirst({
        where:{id,
               belongsto:req.user.id,
        },
      
    }) 
    if(!check) throw new ErrorResponse("Not autherized to Post")
    //create the post 
    const post = await client.page.update({
        where:{ id},
        data:{
          posts:{
            create:{
                description,
                title,
                data,
                profileid:req.user.id            
            },
         } ,
        },

        
    })
    res.status(200).json({status:true,data:post})

 

    } catch (err) {
        return next(new ErrorResponse(err.message,402))
    }
})
