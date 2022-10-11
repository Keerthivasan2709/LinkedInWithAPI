// to get the list people conversation 

const { transformDocument } = require("@prisma/client/runtime");
const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");
const {filterUsers} = require('../../utils/utilityfuc')

//@desc To list the conversed people
//@url GET api/v1/message/list 
//@access Private 

exports.listOfPeople = asynchandler(async (req,res,next)=>{
    try {
      let data = await client.message.findMany({
        distinct:['senderid','receiverid'],
        where:{
                OR:[
                {senderid:req.user.id},
                {receiverid:req.user.id}
                ]
            },
        select:{
            receiverid:true,
            senderid:true,
        },
        orderBy:{
            createdAt:true
        }    
      })
    //using the filltering function 
    data = await filterUsers(data,req.user.id) 
    let sendData  = []
     for await (id of data){
        const profile = await client.profile.findUnique({
            where:{
                id
            },
            select:{
                profilepic:true,
                firstName:true,
                lastName:true
            }

        })
        sendData.push(profile)
         }


    res.status(200).json({
        status:true,
        data:sendData
    })
    
    } catch (err) {
        return next(new ErrorHandler(err.message,500))
    }
})
