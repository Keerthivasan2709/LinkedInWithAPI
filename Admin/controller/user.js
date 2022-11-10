//@desc  To Login to the Admin Page
//@url   POST api/v1/admin/login
//@Access Public 


const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");
const bcrypt  = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { generateTokenResponce } = require("../../utils/generateToken");
exports.adminLogin  = asynchandler(async (req,res,next)=>{
    try {
      const { username, password } = req.body;
      if (!username || !password){return next(new ErrorHandler("Please provide username and password",400));}
      const data = await client.administrator.findFirst({
        where:{
          OR:[
          {username:req.body.username},
          {email:req.body.username},
          ]
         }
      })
      if(!data) return next(new ErrorHandler("user not exist",452));
      const isMatch = await bcrypt.compare(password, data.password);    
      if(!isMatch) return next(new ErrorHandler("the username or password is incorrect ")) ; 
      try{
      const decode = jwt.verify(data.token,process.env.JWT_SECRET)
      res.status(200).json({
        status:true,
        token:data.token,
      })
      }
      catch(err){
         const {token} = generateTokenResponce({id:data.id}) 
         await client.administrator.update({
          where:{id:data.id},
          data:{
            token,
          }
         })
         res.status(200).json({
          status:true,
          token,
         })
      }

    } catch (err) {
        return next(new ErrorHandler(err.message,500))
    }
})