

const asynchandler = require("../../middleware/asynchandler")
const ErrorResponce  = require("../../utils/errorhandler")
const client  = require("../../utils/database")


//@desc Send request to the user 
//@url  POST api/v1/conn/sreq/:receiverid 
//@access Private

exports.sendRequest  = asynchandler(async (req,res,next)=>{
    const check = client.users.findUnique({
        where:{
            uid:req.params.receiverid
        }
    })
    if(!check) return next(new ErrorResponce("the user not exist",413))
    client.connection.create({
        data:{
            senderid: req.user.id ,
            receiverid:req.params.receiverid,
        }
    })  
    .then(result => res.status(200).json({
        status:true,
        sentto:result.receiverid 
    }))
    .catch(err => res.status(200).json({
        status:false,
        error:"Acceptance failed"
    }))
    
    })
