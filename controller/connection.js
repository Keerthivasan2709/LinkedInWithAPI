// building the connection controller functions 
const asynchandler = require("../middleware/asynchandler")
const ErrorResponce  = require("../utils/errorhandler")
const client  = require("../utils/database")
const object = {}
 

//@desc Send request to the user 
//@url  POST api/v1/conn/sreq/:receiverid 
//@access Private

object.sendRequest  = asynchandler(async (req,res,next)=>{
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
    error:"Acceptance failed "
}))

})

//@desc check for the connectin request 
//@url GET api/v1/conn/vreq
//@accsess Private
object.requestRecieved = asynchandler( async (req,res,next)=>{
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

//@desc to accept the connection 
//@url POST api/v1/conn/accept/:aid 
//@access Private 

object.acceptRequest = asynchandler(async(req,res,next)=>{
    client.connection.update({
        where:{
            senderid:req.params.aid 
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
    .catch(err=> res.status(452).json({
        status:false,
        msg:"unable to establish",
        error:err.message
    })
    )
})

//@desc  to View all the connections
//@url GET api/v1/conn/view
//@access Private 

object.viewConnection = asynchandler(async (req,res,next)=>{
    const data  = await client.connection.findMany({
        where:{
            OR:[
                {
                    senderid:req.user.id
                },
                { 
                    receiverid:req.user.id
                }
            ],
            ismutual:true 

        }
    })

    res.status(200).json({
        count:data.length,
        data
    })
})



//freezing the oject for security 
Object.freeze(object)

//exporting the controller object 
module.exports = object