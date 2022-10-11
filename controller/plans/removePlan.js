//@desc To remove the plan 
//@url Delete api/v1/plan?planid=""
//@access Private (Admin)

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");


exports.deletePlan = asynchandler(async (req,res,next)=>{
    try {
     if(!req.query.planid) return next(new ErrorHandler("planid not specified",404))
     const data  = await client.plans.delete({
        where:{id:req.query.planid}
     })
     if(!data) return next(new ErrorHandler("deletion operation failed",500))
     res.status(200).json({
        status:true,
        msg:"the requiested plan is deleted",
     })
    } catch (err) {
        return next(new ErrorHandler(err.message,500))
    }
})
