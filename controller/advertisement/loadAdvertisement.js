// @desc to get the advertisement 
//@url GET api/v1/advertisement/:id
//@access Private 

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");

exports.getAdvertisement  =  asynchandler(async (req,res,next)=>{
    try {
      const data  = await client.advertisement.findFirst({
        where:{id:parseInt(req.params.id)},
        include:{
            company:true,
            _count:{
                select:{
                    followers:true
                }
            }
        }
        
      })
      await client.adsControll.update({
        where:{
            id:  parseInt(req.params.id)  
        },
        data:{
            viewed:{
                increment:1,
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