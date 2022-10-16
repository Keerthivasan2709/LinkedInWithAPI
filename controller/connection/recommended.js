//recommendation to user 
//@desc To recommend other people to the user  
//@url GET api/v1/connection/recommend
//@access Private 


const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");
const {filterUsers} = require("../../utils/utilityfuc")
exports.recommendConnection  = asynchandler(async (req,res,next)=>{
   try{
    let data1  = await client.connection.findMany({
        where:{
            OR:[
            {receiverid:req.user.id},
            {senderid:req.user.id} 
            ],
            ismutual:true,
        },
        select:{
          receiverid:true,
          senderid:true
        }
    })
    if(data1.length>0) data1 = await filterUsers(data1,req.user.id) ;
    //filtering the users formating into one array
    
    let data2 = await client.profile.findMany({
        where:{
            id:req.user.id,
        },
        select:{
            following:{
                select:{
                    followers:{
                        take:12,
                        skip:1,
                        where:{
                            id:{
                                notIn:data1,
                                not:req.user.id
                            },
                        
                        },
                        select:{
                            id:true,
                            profilepic:true,
                            backgroundpic:true,
                            tagDescription:true,
                            firstName:true,
                            lastName:true,
                        }
                    }
                }
                }
            }
   
        })
        
    res.status(200).json({
        status:true,
        data:data2
    })
    }catch(err){return next(new ErrorHandler(err.message,500))} 
})









