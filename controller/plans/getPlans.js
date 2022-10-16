

//@desc to get all the plan details
//@url  GET api/v1/plan 
//@access Public 

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");

exports.getPlans = asynchandler(async (req,res,next)=>{
    try{
        const data = await client.plans.findMany({
            select:{
                id:true,
                name:true,
                price:true,
                validity:true,
                discount:true,
            },
        
            
        })
       if(!data) return next(new ErrorHandler("unable to get the plans",500)) 
       res.status(200).json({
        status:true,
        data
       })
    }  
    catch(err){return next(new ErrorHandler(err.message,500))}

})
