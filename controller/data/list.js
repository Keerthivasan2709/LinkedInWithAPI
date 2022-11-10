const ErrorResponse = require('../../utils/errorhandler')
const client = require('../../utils/database')
const asynchandler = require('../../middleware/asynchandler')

//@desc List of company or 
//@url  GET api/v1/data?type=(college / company)
//@access public 

exports.listdata = asynchandler(async (req,res,next)=>{
       if(!req.query) return next(new ErrorResponse("invaild query parameter",500))
       let data;
       console.log("college".localeCompare(req.query.type) )
       if("college".localeCompare(req.query.type)==0){
        console.log('in')
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
       for await(let ele of data){
          if(ele.companyid) ele.id = ele.companyid;
          else ele.id = ele.instituteId ; 
           
       }
       if(!data) return next(new ErrorResponse('invaild query parameter',404))
       res.status(200).json({
       status:true,
       data,
    })
    })

