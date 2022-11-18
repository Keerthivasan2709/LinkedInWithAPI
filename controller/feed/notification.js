//@desc to send send the notfication 
//@url GET api/feed/notification
//@access Private 

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");

exports.getNotification = asynchandler( async(req,res,next)=>{
    try{
       const data  = await client.activity.findMany({
        where:{
          OR:[
          {belongsTo:req.user.id},
          {userid:req.user.id}

          ]
        },
        select:{
          tagetpic:true,
          message:true,
          type:true,
          targetid:true,
          belongsTo:true,
          createdAt:true
          
        }
       })
       data.forEach(ele=>{
        if(ele.targetid) ele.targetid = ele.belongsTo
        ele.targetpic = ele.tagetpic
        delete ele.tagetpic
       })
       res.status(200).json({
        status:true,
        data,
       }) 
        
    }catch(err){ return next(new ErrorHandler(err.message,500))}
})