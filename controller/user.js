// creating the user controller object with controller method
const asynchandler = require("../middleware/asynchandler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const client = require("../utils/database");
const ErrorResponse = require("../utils/errorhandler");
const crypto = require('crypto')
const {send} = require('../utils/sendmail');


const object = {};

//creating cookie to send
const sendTokenResponce = (data) => {
    // creating the json token
    const token = jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
    const options = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };
    if (process.env.NODE_ENV == "production") options.secure = true;
    return { token, options };
};

object.getReguistrationTocken = function(){
      //generating the tocken 
      this.random = crypto.randomBytes(5).toString('hex')
      
}


//creating the password  reset token 
const getResetToken = async function(userid){
    // Generate token
    const reset = crypto.randomBytes(20).toString('hex')
    
    //hash token and setto resetPasswordToken field
    const getResetToken = crypto.createHash('sha256').update(reset).digest('hex');
    
    const dbop = await client.users.update({
        where:{ uid:userid },
        data:{
            restPasswordTocken:getResetToken,
            restPasswordExpire:new Date(Date.now() + 24 * 60 * 60 * 1000)

        }  ,      
    })
    if(!dbop) return next(new ErrorResaaponse("Reset password failed",404))
    
    return reset 


}

//@desc     To register the user
//@url      POST /api/v1/user/register
//@access   Public

object.register = asynchandler(async (req, res, next) => {
    let { email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
   const data = await client.users.create({
        data: {
            email,
            password,
        },
    });
    
    
    if (!data) return next(new ErrorResponse("user exist", 496));
    const profile = await client.profile.create({
        data: {
            userid: data.uid,
        },
    });
    const { token, options } = sendTokenResponce({
        id: profile.id,
        email: data.email,
    });
    await client.users.update({
        where: {
            uid: data.uid,
        },
        data: {
            jsontoken: token,
        },
    });
    res
        .status(200)
        .cookie("token", token, options)
        .json({ status: true, token })
        .end();
});
//@desc   To login and get jws tocken
//@access Public
object.login = asynchandler(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password)
        return next(new ErrorResponse("Please provide username and password"));
    const data = await client.users.findUnique({
        where: {
            email,
        },
        select: {
            uid: true,
            password: true,
            email: true,
            jsontoken: true,
        },
    });
    //if user not found
    if (!data) return next(new ErrorResponse("the user not exisit", 458));

    // checking the user passwords
    const isMatch = await bcrypt.compare(password, data.password);
    if (!isMatch) return next(new ErrorResponse("Invalid credentials..."));
    //removing the password
    delete data.password;
    const profile = await client.profile.findUnique({
        where: {
            userid: data.uid,
        },
        select: {
            id: true,
        },
    });

    //verifying the token expiry date
    try {
        const decode = jwt.verify(data.jsontoken, process.env.JWT_SECRET);
        res
            .status(200)
            .cookie("token", data.jsontoken, {
                expires: new Date(
                    Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
                ),
                httpOnly: true,
            })
            .json({ status: true, token: data.jsontoken })
            .end();
    } catch {
        const { token, options } = sendTokenResponce({ id: profile.id, email });
        await client.users.update({
            where: {
                uid: data.id,
            },
            data: {
                jsontoken: token,
            },
        });
        res
            .status(200)
            .cookie("token", token, options)
            .json({ status: true, token })
            .end();
    }
});

//@desc    Forgopt password
//@url     POST api/v1/user/forgotpass
//@access  Public

object.forgotPass = asynchandler(async (req, res, next) => {
    
    const data = await client.users.findUnique({
        where:{ email:req.body.email},
        select:{uid:true}
    })
    console.log(data)
    if(!data) return next(new ErrorResponse("NO user found",404))
    const token = await getResetToken(data.uid)
    try{ const result = await send({
         mailid:req.body.email,
         sub: 'Mail sent in request of password reset',

    })
         res.status(200).json({status:true,msg:"mail sent"}) 
    }
    catch{ 
    res.status(500).json({status:true,msg:"mail not sent"})
    }
    
});

//@desc To verify the reset token and reseting the password 
//@url api/v1/user/resetpassword/:passcode
//@access Public 
object.resetPassword = asynchandler(async (req,res,next)=>{
    try{const resetPassToken = crypto.createHash('sha256').update(req.params.passcode).digest('hex');
        const data  = await client.users.findFirst({
            where:{restPasswordTocken:resetPassToken,
                   restPasswordExpire:{
                     gte: new Date(),
                   
                   }
            },
                   

            select:{
               uid:true,
               email:true,
            }
        })
        if(!data) return next(new ErrorResponse("Invalid Token",406))
        const salt = await bcrypt.genSalt(10);
        const newpassword = await bcrypt.hash(req.body.password, salt);
        const token = sendTokenResponce({id:data.uid,email:data.email})   
        const result = await client.users.update({
            where:{
                uid:data.uid
            },
            data:{
                jsontoken:token,
                password:newpassword,
                restPasswordExpire:null,
                restPasswordTocken:null,
            }
            
        })      
        if(!result) return next(new ErrorResponse("the passwaord reset failed try again",436))
        console.log(result)
        res.json({status:true, token})
       }
    catch(err){res.json({status:false,msg:err.message})}
    console.log(req.params.passcode)
})



//freezing the object for securing the function
Object.freeze(object);

// exporting the user controller object
module.exports = object;
