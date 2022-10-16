const asynchandler = require("../../middleware/asynchandler")
const client = require("../../utils/database")




//@desc  Log user out/ clear cookie 
//@routes Post api/v1/user/logout
//@access Private 

exports.logOut = asynchandler(async (req,res,next)=>{

    res.cookie('token','none',{
        expires: new Date(Date.now()+1*1000),
        httpOnly:true
    })
    res.status(200).json({
        status:true,
        data:{}
    })
    
})