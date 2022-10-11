//@desc TO show the viwed profile
//@url api/v1/profile/viewed
//@access Private(Premiume)

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");

exports.viwedProfile = asynchandler(async (req, res, next) => {
  try {
    let data;
    if (!req.user.premium) {
      data = await client.viewer.findMany({
        where: {
          profileid: req.user.id,
        },
        take:3,
        select: {
          viewed: {
            
            select: {
              profilepic: true,
              backgroundpic: true,
              firstName: true,
              lastName: true,
              tagDescription: true,
              companys: {
                select: {
                  position: true,
                  company: {
                    select: {
                      name: true,
                    },
                  },
                },
              },
            },
        
          },
        },
        orderBy:{
            viewedAt:"desc"
        }
      });
    } else {
      data = await client.viewer.findMany({
        where: {
          profileid: req.user.id,
        },
        take: 7,
        skip: 1,
        select: {
          viewed: {
            select: {
              profilepic: true,
              backgroundpic: true,
              firstName: true,
              lastName: true,
              tagDescription: true,
              companys: {
                select: {
                  position: true,
                  company: {
                    select: {
                      name: true,
                    },
                  },
                },
              },
            },
          },
        },
        orderBy: {
          viewedAt: "desc",
        },
      });
    }
    if (!data) {
      return next(new ErrorHandler("unable to fetch the data", 500));
    }
    res.status(200).json({
      status: true,
      data,
    });
  } catch (err) {
    return next(new ErrorHandler(err.message, 500));
  }
});
