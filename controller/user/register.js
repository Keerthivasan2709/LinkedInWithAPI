
const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorResponse = require("../../utils/errorhandler");
const crypto = require("crypto");
const { send } = require("../../utils/sendmail");


//@desc     To register the user
//@url      POST /api/v1/user/register
//@access   Public
exports.register = asynchandler(async (req, res, next) => {
    //geting the info from the req body   
    let { email } = req.body;
    
    //verify with existing users 
    const check = await client.users.findUnique({
      where:{
          email
      },
    })
    if(check) return next(new ErrorResponse('user exist',403))
      
    // Generate verification code
     const verificationCode = crypto.randomBytes(2).toString("hex");
     
    // send verification code to email 
    try{ send({
          mailid:email,
          sub:" Sending token for verification",
          message:"The user can login only after completing the verification process.Use the given code to verify.",
          url:` verification Code : ${verificationCode}`     
    })
     
    // storing the  otp information 
   const data = await client.verification.create({
    data:{
      email,
      token:verificationCode,
      expiretime: Date.now() + 10*60*1000
    }
   })
  
   if(!data) return next(new ErrorResponse("Unable to store the otp",402))
    
    res.status(200).json({status:true,msg:"verification pending"})
  
  }
  catch(err) {
    return next(new ErrorResponse(err.message,403))
  }
  })
  