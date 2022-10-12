// @desc to update the advertisement 
//@url PATCH api/v1/advertisement/
//@access Private 

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");

exports.updateAds   =  asynchandler(async (req,res,next)=>{
    try{
     const data = await client.advertisement.update({
        where:{
            id:req.body.id,
        },
        data:{
           advertisemenLogo:req.body.advertisemenLogo,
           title:req.body.title,
           about:req.body.about,
        }
     })
    }catch(err){return next(new ErrorHandler(err.message,500))}
})