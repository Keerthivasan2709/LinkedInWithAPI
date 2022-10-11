// to load all the conversation between the users

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");

//@desc to load the message for the users 
//@url GET api/v1/message/:userid
//@access Private 

exports.loadMessage = asynchandler(async (req,res,next)=>{
 
    const messages = await client.message.findMany({
        where:{
            OR:[
                {
                   senderid:req.user.id,
                   receiverid:req.params.userid,
                },
                {
                   receiverid:req.user.id,
                   senderid:req.params.userid,                        
                }
            ]
        },
        select:{
            senderid:true,
            receiverid:true,
            content:true,
            message:true,
        },
        orderBy:{
            createdAt:'desc',
        }

    })

})