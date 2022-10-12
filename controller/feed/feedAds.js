//@desc To get random adds 
//@url  GET Protect api/v1/feed/ads 
//@access Private 

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");

exports.getRandomAds = asynchandler(async (req,res,next)=>{
    try {
        
     const data  = await client.adsControll.findFirst({
        where:{
        displayed:{
            lte:1000,

        },
        viewed:{
            lte:100
        },


        },
        select:{
            advertismentId:{
                select:{
                    title:true,
                    type:true,
                    about:true,
                    company:{
                        select:{
                            name:true,
                            description:true,
                            
                        }
                    }
                }
            }
        }
     })
     
    if(!data) return next(new ErrorHandler("unable to fetch",500))
    res.status(200).json({
        status:true,
        data
    })
     
    } catch (err) {
      return next(new ErrorHandler(err.message,500))  
    }
}) 