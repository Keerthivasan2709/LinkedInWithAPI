//@desc To update the plan details 
//@url PATCH api/v1/plan 
//@access Private 

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const { Decimal } = require("@prisma/client/runtime");
const ErrorHandler = require("../../utils/errorhandler");

exports.updatePlan = asynchandler(async (req,res,next)=>{
    try{
    const data  = await client.plans.update({
        where:{
            id:req.body.id ,
        },
        data:{
            name:req.body.name,
            price: req.body.price? req.body.price:undefined,
            discount:req.body.discount? req.body.discount:undefined,
            valdity:req.body.valdity? parseInt(req.body.valdity):undefined,
        }
    })
    if(!data) return next(new ErrorHandler(err.message,500));
    res.status(200).json({
        status:true,
        data
    })
 }catch(err) { return next(new ErrorHandler(err.message,500))}

})