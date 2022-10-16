//@desc To follow a person
//@url POST api/v1/profile?follow=true&&notifiy=true
//@access Private

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");

exports.followPeople = asynchandler(async (req, res, next) => {
  try {
    if (!req.query.follow || !req.query.notify) return next(new ErrorHandler("missing query field", 401));
    let data ;
    if(req.query.follow == "true") {
      data  = await client.peopleFollowed.create({
        data:{
          followed:req.body.id,
          follower:req.user.id,
          notification:req.query.notify == 'true' ? true:false
        }

      }) 
    }
    else{
      data = await client.peopleFollowed.delete({
        where:{
          followed_follower:{
            followed:req.body.id,
            follower:req.user.id
          }
        }
      })
    }
    if(!data) return next(new ErrorHandler("unable to do the requested operation "))
    res.status(200).json({
      status:true,
      data
    })
    
  } catch (err) {
    return next(new ErrorHandler(err.message, 500));
  }
});
