//@desc to create a addvertisement 
//@url POST api/v1/advertisement
//@acess Private 

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");

exports.createAds = asynchandler(async (req,res,next)=>{
    try{
    const data = await client.advertisement.create({
        data:{
            records:{
                create:{
                   displayed:0,
                   viewed:0,
                }
            },
            advertisemenLogo:req.body?.logo,
            title:req.body?.title,
            type:req.body?.type,
            about:req.body?.about,
            company:{connect:{
                id:req.body.companyid
            }}
            
            

        }
    })
    if(!data) return next(new ErrorHandler("creation failed",500))
    res.status(200).json({
        status:true,
        data
    })
}catch(err){return next(new ErrorHandler(err.message,500))}
})