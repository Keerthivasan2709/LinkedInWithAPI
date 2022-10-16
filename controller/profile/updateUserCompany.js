//@desc TO update the user company details 
//@url  POST api/v1/profile/UserDeatils
//access Private 

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");

exports.updateUserCompany  = asynchandler(async (req,res,next)=>{
    try{
     const data = await client.profile.update({
        where:{
            id:req.user.id
        },
        data:{
            companys:{
                create:{
                   position:req.body.position,
                   dewcription:req.body.description,
                   startDate:new Date(req.body.startDate),
                   endDate: new Date(req.body.endDate),
                   Domain:req.body.Domain,
                   company:{
                    connect:{
                        companyid:req.body.companyid
                    }
                   }
                   
                }
            }
        }
     })
     if(!data ) return next(new ErrorHandler("unable to update the company",500))
     res.status(200).json({
        status:true,
        data 

     })
    }catch(err) { return next(new ErrorHandler(err.message,500))}
})