//to create page 
//@desc To create a page for the users 
//@url  POST api/v1/page/create 
//@access Private 

const asynchandler = require("../../middleware/asynchandler");
const ErrorResponse = require('../../utils/errorhandler') ;
const {activityUpdate} = require('../../utils/activityManager'); 
const client = require("../../utils/database");
exports.createPage = asynchandler( async (req,res,next)=>{
let {
    title,
    websitelink,
    logopic,
    description,
    pagetype,
} = req.body 
 try {
   // creating a page
  try{ const check = await client.page.findFirst({
    where:{
      belongsto:req.user.id ,
    }
   })
  }
  catch(err){ return next(new ErrorResponse("Cannot create more than one page",402))}

   const data = await client.page.create({
    data:{
        
        title,
        websitelink,
        logpic:logopic,
        description,
        pagetype,
        belongsto:req.user.id

    }
   })
   
   res.status(200).json({
    status:true,
    data
   })
   
   await activityUpdate({

   })
    

    
 } catch (err) {
    return next(new ErrorResponse(err.message,404))
 }


})
