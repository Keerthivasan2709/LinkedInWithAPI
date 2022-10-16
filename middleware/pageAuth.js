//page autherization middleware 
//

const asynchandler = require("./asynchandler")
const ErrorResponse = require("../utils/errorhandler")
const client = require('../utils/database')

exports.pageAuthentication  =  asynchandler(async (req,res,next)=>{
try {
    const check = await client.page.findFirst({
        where:{
            id:req.body.pageid,
            belongsto:req.user.id,
            
        }
    }) 
    if(check) {
        req.page = { role:"admin" }
        next()
    } 
    const data = await client.pageAccess.findFirst({
        where:{
            pageid:req.body.pageid,
            userid:req.user.id,
        },
        select:{
            role:true
        }
    })
    if(!data) return next(new ErrorResponse("Not Authorized to perform this opertaion",420))
    req.page = data
    next()
} catch (error) {
    return next(new ErrorResponse("Not Authorized to perform this page opertaion",420))
}
})