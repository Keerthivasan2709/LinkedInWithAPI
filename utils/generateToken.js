 
const jwt  = require('jsonwebtoken');
const client = require('./database');

 //creating cookie to send
 exports.generateTokenResponce = (data) => {
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