const asynchandler = require("../../middleware/asynchandler")
const ErrorResponce  = require("../../utils/errorhandler")
const client  = require("../../utils/database")


//@desc check for the connectin request 
//@url GET api/v1/conn/vreq
//@accsess Private
exports.requestRecieved = asynchandler( async (req,res,next)=>{
    const data  = await client.connection.findMany({
        where:{
            receiverid:req.user.id,
            ismutual:false
        },
        select:{
           senderid:true

        }
    })
    
    if(!data) return next(new ErrorResponce("failed to load the data",458) )
    res.status(200).json({
         status:true,
         count: data.length, 
         data
    })    
})