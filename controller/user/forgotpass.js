const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorResponse = require("../../utils/errorhandler");
const crypto = require("crypto");
const { send } = require("../../utils/sendmail");


//@desc    Forgopt password
//@url     POST api/v1/user/forgotpassword
//@access  Public

exports.forgotPass = asynchandler(async (req, res, next) => {
    const data = await client.users.findUnique({
      where: { email: req.body.email },
      select: { uid: true },
    });
    if (!data) return next(new ErrorResponse("NO user found", 404));
  
    //generating the reset token 
    const token = await getResetToken(data.uid);
    try {
      await send({
        mailid: req.body.email,
        sub: "Mail sent in request of password reset",
        message:"Use the url to reset your password. NOTE the url works only for one day and also you change the password only once using this url",
        url:`${req.protocol}://${req.get('host')}/api/v1/user/resetpassword/${token}`
      });
      res.status(200).json({ status: true, msg: "mail sent" });
    } catch(err) {
       return next(new ErrorResponse("mail not sent ",500))
    }
  });


  //additional support function
  async function getResetToken(userid) {
    // Generate token
    const reset = crypto.randomBytes(20).toString("hex");
  
    //hash token and setto resetPasswordToken field
    const getResetToken = crypto.createHash("sha256").update(reset).digest("hex");
  
    const dbop = await client.users.update({
      where: { uid: userid },
      data: {
        restPasswordTocken: getResetToken,
        restPasswordExpire: new Date(Date.now() + 24 * 60 * 60 * 1000),
      },
    });
    if (!dbop) return next(new ErrorResponse("Reset password failed", 404));
  
    return reset;
  };
  