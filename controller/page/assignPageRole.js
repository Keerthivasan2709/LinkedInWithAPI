//assigning the roles for the aother users to perform CRUD operation 
//@desc To assign the roles to user by admin 
//@url  POST api/v1/page/assignrole
//@access Private(page admin only )

const asynchandler = require('../../middleware/asynchandler')
const client = require('../../utils/database')
const ErrorResponse = require('../../utils/errorhandler')


exports.assignPageRole = asynchandler(async (req,res,next)=>{
    try {
    if (!req.page.role) return next(new ErrorResponse("Error in middle ware",426))
    if(req.page.role!="admin") return next(new ErrorResponse("Not Authorized",420))
    console.log(req.page.role)
    await client.page.update({
        where:{
            id:req.body.pageid,
        },
        data:{
            pageAccess:{
                create:{
                    userid:req.body.userid,
                    role:req.body.role.toLowerCase()
                }
            }
        }
    })
    res.status(200).json({
        status: true,
        msg:"role assigned"
    })
    } catch (error) {
        return next(new ErrorResponse(error.message,500))
    }
    
})