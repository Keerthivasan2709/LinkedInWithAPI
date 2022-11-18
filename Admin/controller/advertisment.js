

//@decs To get all the info of advertisment
//@url GET api/v1/admin/advertisment
//@access Private 

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");

exports.getAdvertisment = asynchandler(async(req,res,next)=>{
    try{
        let page = 0;
        let filter = {};
        let orderfilter = {} ;
        let companyfilter = {} ;
        let recordfilter = {} ;
        if(req.query.page) page  = req.query.page ;
        if(req.query.type) filter.type = req.query.type;
        if(req.query.viewed) viewed = req.query.page;
        if(req.query.companyid) companyfilter.companyid  = req.query.companyid
        if(req.query.companyname) companyfilter.name = req.query.companyname
        filter.company  = companyfilter
        console.log(filter)
     const data = await client.advertisement.findMany({
        take:7,
        skip:7*page,
        where:filter,
        select:{
            id:true,
            type:true,
            title:true,
            company:{
                 
                select:{
                    name:true,
                    companyid:true,
                }
            },
            records:{
                select:{
                    viewed:true,
                    displayed:true,
                    createdAt:true,
                    updatedAt:true
                }
            }
             
        },
        orderBy:orderfilter,
        
     })
     data.forEach(ele=>{
        Object.keys(ele).forEach((subele)=>{
             if (typeof ele[subele]=="object"){
                Object.keys(ele[subele]).forEach(key=>{
                     if(key.includes(subele)) ele[key] = ele[subele][key]
                     else ele[subele+key] = ele[subele][key]
                } )
                delete ele[subele]
            }
        } )
        
     })
     res.status(200).json({
        status:true,
        data
     })
    }catch(err){
        return next(new ErrorHandler(err.message,500))
    }
})