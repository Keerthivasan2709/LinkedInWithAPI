//@desc to view the user Page
//@url   GET api/v1/page
//@access Private 

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorResponse =  require("../../utils/errorhandler")


exports.viewMyPage = asynchandler(async (req,res,next)=>{
    // adding the view count
 try {
     const data = await client.page.findFirst({
         where:{
             belongsto:req.user.id,
         },
         include:{
             posts:true,
             followers:{
               select:{
                 profilepic:true,
               }
             },
             _count:{
                 select:{
                     followers:true,
                     posts:true
                 }
             }
             
         }
     })
     
     res.status(200).json({
         status:true,
         data
     })
     
 } catch (error) {
     return next(new ErrorResponse(error.message,402))
 } 
    
     
    
})