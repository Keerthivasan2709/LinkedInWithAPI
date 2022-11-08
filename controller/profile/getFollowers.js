const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");


//@desc  TO get the follower of the user 
//@url   GET api/v1/profile/getfollower
//@Access Private 

exports.getFollowers = asynchandler(async(req,res,next)=>{
    try{

        const data = await client.peopleFollowed.findMany({
            where:{
             follower:req.user.id,
            },
            select:{
                followed:true
            }
        })
        if(!data) return next(new ErrorHandler("Data not found",500))

        
        res.status(200).json({
            status:true,
            data
        })

    }
    catch(err){
        return next(new ErrorHandler(err.message,500))
    }
})