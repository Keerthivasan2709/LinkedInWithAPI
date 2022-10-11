//@desc To add a plan 
//@url api/v1/plan/add
//@Access Private (ADMIN)

const { Decimal } = require("@prisma/client/runtime");
const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");

exports.addPlan = asynchandler(async (req,res,next)=>{
  try{
 const plan  = await client.plans.create({
    data:{
        name:req.body?.name,
        price: Decimal(req.body.price),
        discount: Decimal(req.body.discount),
        valdity: parseInt(req.body.valdity),
    }

 })
 if(!plan) return next(new ErrorHandler("Unable to add the plan",402))
 res.status(200).json({
    statu:true,
    data:plan,
 })
}
catch(err) { return next(new ErrorHandler(err.message,500))} 

})