//contain the resently following group/page

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");

//@desc TO get the resent activity of the user 
//@url  GET api/v1/feed/resent
//@access POrivate 

exports.resentActivity = asynchandler(async (req,res,next)=>{
    try {
    
         const data = await client.activity.findMany({
            where:{
                type:{
                    in:['page','follow']
                }
            },
            select:{
                message:true
            },
            orderBy:{
                createdAt:'desc'
            }

         })

    res.status(200).json({
        status:true,
        data
    })
  

    } catch (err) {
        return next(new ErrorHandler(err.message,500))
    }
})


