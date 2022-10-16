const asynchandler = require("../../middleware/asynchandler")
const ErrorResponce  = require("../../utils/errorhandler")
const client  = require("../../utils/database")

//@desc to accept the connection 
//@url POST api/v1/conn/accept/:aid 
//@access Private 

exports.acceptRequest = asynchandler(async(req,res,next)=>{
    client.connection.update({
        where:{
            senderid_receiverid:{
                senderid:req.params.aid,
                receiverid:req.user.id,
            }
        },
        data:{
            ismutual:true
        }
    })
    .then(result => res.status(200).json({
        status:true,
        msg: "connection established"
    }).end()
    )
    .catch(err=>{ 
       return next(new ErrorResponce("connection not found",453))
})

})
