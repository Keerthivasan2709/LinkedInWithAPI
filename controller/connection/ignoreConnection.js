
//@desc To ignore the connection request
//@url POST api/v1/connection/ignore
//@access  Private 

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");

exports.ignoreConnection  = asynchandler(async (req,res,next)=>{
    try {
     const data = await client.connection.delete({
        where:{
            senderid_receiverid:{
                senderid:req.body.id,
                receiverid:req.user.id,
            }
        }
     })
     if(!data) return next(new ErrorHandler("Unable to Ignore the connection"))
     res.status(200).json({
        status:true,
        msg:"the connection is ignored"
     })
        
    } catch (err) {
        return next(new ErrorHandler(err.message,500))
    }
})