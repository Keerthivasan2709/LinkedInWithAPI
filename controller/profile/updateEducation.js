//@desc to Add user education details
//@url  POST api/v1/profile/usereducation
//@access Private

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");

exports.updateUserEducation = asynchandler(async (req, res, next) => {
  try {
    console.log("working")
    const data = await client.userEducation.create({
      data: {
        startDate: new Date(req.body.startDate),
        endDate: new Date(req.body.endDate),
        course: req.body.course,
        description: req.body.description,
        persentage: req.body.persentage,
        student:{
            connect:{
                id:req.body.organization
            }
        },
        useredu:{
            connect:{
                id:req.user.id
            }
        }
      },
    });
    if (!data) return next(new ErrorHandler("update education failed", 500));
    res.status(200).json({
      status: true,
      data,
    });
  } catch (err) {
    return next(new ErrorHandler(err.message, 500));
  }
});
