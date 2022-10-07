const ErrorResponse = require('../../utils/errorhandler')
const client = require('../../utils/database')
const asynchandler = require('../../middleware/asynchandler')

//@desc List of company or 
//@url  GET api/v1/data?type=(college / company)
//@access public 

exports.listdata = asynchandler(async (req,res,next)=>{
       if(!req.query) return next(new ErrorResponse("invaild query parameter",500))
       let data;
       if(req.query == "college"){
        data = await client.institution.findMany({
            select:{
                instituteId:true,
                name:true
            }
        })
        
       }
       else{
        data = await client.company.findMany({
            select:{
                companyid:true,
                name:true
            }
        })
       }
       if(!data) return next(new ErrorResponse('invaild query parameter',404))
       res.status(200).json({
       status:true,
       data,
    })
    })

