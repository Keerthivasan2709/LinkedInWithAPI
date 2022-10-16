//@desc TO delete the advertisment 
//@url DELETE api/v1/advertisement/:id 
//@access Private 

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");

exports.deleteAds = asynchandler(async(req,res,next)=>{
    try{
    // cascading delete 
    await client.adsControll.delete({
        where:{
            id:parseInt(req.params.id)
        }
    })
    const data  = await client.advertisement.deleteMany({
        where:{id:parseInt(req.params.id)},
        
    })
    
    if(!data) return next(new ErrorHandler("unable to delete ",500))
    res.status(200).json({
        status:true,
        data
    }) 

    }catch(err){return next(new ErrorHandler(err.message,500))}
})