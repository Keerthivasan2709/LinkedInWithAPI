

const asynchandler = require("../../middleware/asynchandler")
const ErrorResponce  = require("../../utils/errorhandler")
const client  = require("../../utils/database")


//@desc Send request to the user 
//@url  POST api/v1/connection/sreq/
//@access Private

exports.sendRequest  = asynchandler(async (req,res,next)=>{
    const check = client.profile.findUnique({
        where:{
            id:req.body.id,
        }
    })
    if(!check) return next(new ErrorResponce("the user not exist",413))
    const profile = await client.profile.findFirst({where:{id:req.user.id},select:{profilepic:true}})
    await client.activity.create({
        data:{
            useractivity:{
                connect:{
                    id:req.user.id
                }
            },
            type:"connection",
            message:"sent an invitation",
            belongsTo:req.body.id,
            targetid:req.body.id,
            tagetpic:profile.profilepic
            
        }
    })
    client.connection.create({
        data:{
            senderid: req.user.id ,
            receiverid:req.body.id,
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
