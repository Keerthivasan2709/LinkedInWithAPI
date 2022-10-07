const asynchandler = require("../../middleware/asynchandler")
const client = require("../../utils/database")
const ErrorResponse = require("../../utils/errorhandler")

//@desc     To get the user profile 
//@url      POST /api/v1/profile/my    
//@access   Private
exports.getMyProfile = asynchandler( async (req,res,next) => {
    const data = await client.profile.findUnique({
        where:{
            id:req.user.id
        },
        // select:{
        //      firstName:true,
        //      lastName:true,
        //      profilepic:true, 
        //      mobileNumber:true,
        //      description :true,
        //      tagDescription:true,
            
        //  },
         include:{
            posts:true,
            usereducation:true,
            companys:true,
            activity:true,
            skills:true,
            following:true

         }
         
    })
    // desturing the object
    
    data.email = req.user.email
    res.status(200).json(data).end()
})
