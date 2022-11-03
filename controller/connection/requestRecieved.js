const asynchandler = require("../../middleware/asynchandler")
const ErrorResponce  = require("../../utils/errorhandler")
const client  = require("../../utils/database")
const {mutualConnection} =require('../../utils/mutualConnection')

//@desc check for the co121e99aa-bb9f-4f84-80b9-1b864a387528nnectin request 
//@url GET api/v1/conn/vreq
//@accsess Privateco121e99aaco121e99aaco121e99aa
exports.requestRecieved = asynchandler( async (req,res,next)=>{
    const data  = await client.connection.findMany({
        // skip:(req.params.page-1)*4,
        // take:4,
        
        where:{
            receiverid:req.user.id,
            ismutual:false
        },
        select:{
           senderid:true

        }
    })
    const sendData = [] 
    for await (let ele of data){
        const profile = await client.profile.findUnique({
            where:{
                id:ele.senderid,
            },
            select:{
               profilepic:true,
               firstName:true,
               lastName:true,
               tagDescription:true,
               companys:{
                select:{
                 position:true,
                 company:{
                    select:{
                        name:true,
                    }
                 }
                }
               } 
            }
            
        })
        const mutualconnection = await mutualConnection(req.user.id,ele.senderid)
        sendData.push({
            senderid:ele.senderid,
            profile,
            mutualconnection
        })
    }
    if(!data) return next(new ErrorResponce("failed to load the data",458) )
    res.status(200).json({
         status:true,
         data:sendData
    })    
})