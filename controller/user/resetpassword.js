
const asynchandler = require("../../middleware/asynchandler");
const bcrypt = require("bcryptjs");
const client = require("../../utils/database");
const ErrorResponse = require("../../utils/errorhandler");
const crypto = require("crypto");
const {generateTokenResponce}  = require("../../utils/generateToken")


//@desc To verify the reset token and reseting the password
//@url api/v1/user/resetpassword/:passcode
//@access Public
exports.resetPassword = asynchandler(async (req, res, next) => {
    try {
      const resetPassToken = crypto
        .createHash("sha256")
        .update(req.params.passcode)
        .digest("hex");
      const data = await client.users.findFirst({
        where: {
          restPasswordTocken: resetPassToken,
          restPasswordExpire: {
            gte: new Date(),
          },
        },
  
        select: {
          uid: true,
          email: true,
        },
      });
      if (!data) return next(new ErrorResponse("Invalid Token", 406));
      const salt = await bcrypt.genSalt(10);
      const newpassword = await bcrypt.hash(req.body.password, salt);
  
      //generating the auth tocken
      const {token} = generateTokenResponce({ id: data.uid, email: data.email });
      const result = await client.users.update({
        where: {
          uid: data.uid,
        },
        data: {
          jsontoken: token,
          password: newpassword,
          restPasswordExpire: null,
          restPasswordTocken: null,
        },
      });
      if (!result)
        return next(
          new ErrorResponse("the passwaord reset failed try again", 436)
        );
      

      res.status(200).json({ status: true, msg:"Password reset success" });
    } catch (err) {
      return next(new ErrorResponse(err.message,405))
    }
    
  });
  
 
  
  