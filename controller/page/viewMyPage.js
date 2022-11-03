//@desc to view the user Page
//@url   GET api/v1/page
//@access Private 

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorResponse =  require("../../utils/errorhandler")


exports.viewMyPage = asynchandler(async (req,res,next)=>{
    // adding the view count
 try {
     const data = await client.page.findMany({
        where:{
            belongsto:req.user.id,
        },
        include:{
            _count:{
                select:{
                    followers:true,
                    posts:true
                }
            },
            posts:true
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