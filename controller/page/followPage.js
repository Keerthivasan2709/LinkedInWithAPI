// to add follower to the page 

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorResponse = require('../../utils/errorhandler');
//@desc To add follow the page 
//@url POST api/v1/page/follow
//@access Private 

exports.followPage = asynchandler(async (req,res,next)=>{
    try{await client.page.update({
        where:{
            id:req.body.pageid,
        },
        data:{
            followers:{
                connect:{
                    id:req.user.id
                }
            }
        }
            
    })
    res.status(200).json({
        status:true,
        following:true
    })
}catch(err){
    
    return next(new ErrorResponse(err.message,500))
}
})

//@desc to unfollow the page 
//@url  POST api/v1/page/unfollow 
//@access Private  

exports.unfollowPage = asynchandler(async (req,res,next)=>{
 try {
    await client.page.update({
        where:{
            id:req.body.pageid,
        },
        data:{
            followers:{
                disconnect:{
                    id:req.user.id
                }
            }
        }
    })
    res.status(200).json({
        status:true,
        following:false

    })
 } catch (err) {
   return next(new ErrorResponse(err.message,500)) 
 }
})

