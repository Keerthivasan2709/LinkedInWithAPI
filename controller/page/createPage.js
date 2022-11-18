//to create page 
//@desc To create a page for the users 
//@url  POST api/v1/page/create 
//@access Private 

const asynchandler = require("../../middleware/asynchandler");
const ErrorResponse = require('../../utils/errorhandler') ;
const {activityUpdate} = require('../../utils/activityManager'); 
const client = require("../../utils/database");
const { uploads } = require("../../utils/cloudnary");
const fs = require('fs');
const ErrorHandler = require("../../utils/errorhandler");
exports.createPage = asynchandler( async (req,res,next)=>{
 
 try {
  console.log(req.body)
  let {
    title,
    websitelink,
    description,
    organizationsize,
    organizationtype,
} = req.body
console.log(req.body)
   // creating a page
  try{ const check = await client.page.findFirst({
    where:{
      belongsto:req.user.id ,
    }
   })
  }
  
  catch(err){ return next(new ErrorResponse("Cannot create more than one page",402))}
  console.log("this is file object",req.file)
   const {path} = req.file
   console.log(path);
   const url = await uploads(path)

  //  fs.unlinkSync(path)

   const data = await client.page.create({
    data:{
        
        title,
        websitelink,
        description,
        organizationsize,
        organizationtype,
        logpic:url.secure_url,
        belongsto:req.user.id
         
    }
   })
   
   res.status(200).json({
    status:true,
    data
   })
   
  
    

    
 } catch (err) {
    return next(new ErrorResponse(err.message,404))
 }


})
