//@desc TO update the user company details 
//@url  POST api/v1/profile/usercompany
//access Private 

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");

exports.updateUserCompany  = asynchandler(async (req,res,next)=>{
    try{
    let skills = req.body?.skills
    // the input will be [{name:"robotics",cerificate:"dfj",description:"des.."},{name:"leadership"}]
    //adding the skill
    for await(let skill of skills){
         await client.skill.upsert({
            where:{
                name_userid:{
                    name:skill.name,
                    userid:req.user.id
                }
            },
            update:{
                certificate:skill?.certificate,
                description:skill?.description,
            },
            create:{
                name:skill?.name,
                certificate:skill?.certificate,
                description:skill?.description,
                userskill:{
                    connect:{
                        id:req.user.id
                    }
                }
            }


         })
    }



    let status = "x-employee"
     if(!req.body.endDate)status = "working"
     const data = await client.userCompany.upsert({
         where:{
            profileid_companyid:{
                profileid:req.user.id,
                companyid:req.body?.companyid
            }
         },
         update:{
            
            position:req.body?.position,
            description:req.body?.description,
            startDate:new Date(req.body?.startDate),
            endDate:req.body.endDate?new Date(req.body.endDate):null,
            Domain:req.body?.Domain,
            status,


         },
        
        
        create:{
    
                    position:req.body?.position,
                   description:req.body?.description,
                   startDate: new Date(req.body?.startDate),
                   endDate: req.body.endDate?new Date(req.body.endDate):null,
                   Domain:req.body?.Domain,
                   status,
                   company:{
                    connect:{
                        id:req.body.companyid
                    }
                   },
                   usercompany:{
                    connect:{
                        id:req.user.id
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