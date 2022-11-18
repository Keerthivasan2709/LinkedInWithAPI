const asynchandler = require("../../middleware/asynchandler")
const ErrorResponce  = require("../../utils/errorhandler")
const client  = require("../../utils/database")
const { Target } = require("puppeteer")

//@desc to accept the connection 
//@url POST api/v1/conn/accept
//@access Private 

exports.acceptRequest = asynchandler(async(req,res,next)=>{
    const profile = await client.profile.findFirst({where:{id:req.user.id},select:{profilepic:true}})
    await client.activity.create({
        data:{
            useractivity:{
                connect:{
                    id:req.user.id,
                }
            },
            message:"Accepted the invitation",
            type:"connection",
            belongsTo:req.body.id,
            tagetpic:profile.profilepic,
            targetid:req.body.id,
            
            
        } 
    })
    client.connection.update({
        where:{
            senderid_receiverid:{
                senderid:req.body.id,
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
