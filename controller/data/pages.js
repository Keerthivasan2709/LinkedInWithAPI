//@desc to get the pages (higest viewed)
//@url api/v1/data/page
//@access Public 

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");

exports.pageDetails = asynchandler(async (req,res,next)=>{
    try {
      const data = await client.page.findMany({
        take:15,
        skip:1,
        where:{
            viewed:{
                gte:1000,
            }
        },
        select:{
            id:true,
            title:true,
            logpic:true,
            belongsto:true,
            viewed:true,
            _count:{
                select:{
                    followers:true
                }
            }
            }
      })
      if(!data) return next(new ErrorHandler("unable to fetch",500))
      res.status(200).json({
        status:true,
        data
      })

    } catch (err) {
        return next(new ErrorHandler(err.message,500))
    }
})
