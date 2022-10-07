
const asynchandler = require("../../middleware/asynchandler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const client = require("../../utils/database");
const ErrorResponse = require("../../utils/errorhandler");
const {generateTokenResponce} = require("../../utils/generateToken")

//@desc   To login and get jws token
//@url    api/v1/user/
//@access Public
exports.login = asynchandler(async (req, res, next) => {
  
    const { email, password } = req.body;
    if (!email || !password){return next(new ErrorResponse("Please provide username and password",400));}
      
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
      //if token expire then generate token
      const { token, options } = generateTokenResponce({ id: profile.id, email });
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