// to send message to another user 

const ErrorResponce = require('../../utils/errorhandler')
const asynchandler = require('../../middleware/asynchandler')
const client  = require('../../utils/database')

//@desc  To send a message to another user 
//@url POST api/v1/message/send
//@access  Private 

exports.sendMessage = asynchandler(async (req,res,next)=>{
    try{
    //!-- need to uplode the fil to static folder
     
    const data = await client.message.create({
         data:{
             senderid:req.user.id,
             receiverid:req.body.receiverid,
             message:req.body.message,
             constent:"need content uri" 
            }
    })
    if(!data) return next(new ErrorResponce("unable to fetch",423))
    res.status(200).json({
        status:true,
        data
    })
}catch(err) { return next(new ErrorResponce(err.message,500))}
    

})
