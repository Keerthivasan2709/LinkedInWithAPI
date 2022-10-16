// to get all the notification of the user 

const { transformDocument } = require("@prisma/client/runtime");
const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");

//@desc to get user notififcation
//@url GET api/v1/notification 
//@access Private 

exports.getNotification = asynchandler(async (req,res,next)=>{
    try {
        const data  = await client.activity.findMany({
            where:{
                type:{
                    in:['comment','replay','likeCom','likeRep','follow'],
                    
                },
                belongsTo:req.user.id 
            },
            select:{
                targetid:true,
                tagetpic:true,
                message:true,
                createdAt:true,
                
            },
            orderBy:{
               createdAt:"desc" ,
            }


        })
        if(!data) return next(new ErrorHandler("unable to fetch ",500))
        res.status(200).json({
            status:true,
            data 
        })
    } catch (err) {
        return next(new ErrorHandler(err.message,500))
    }
})
