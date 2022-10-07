// editing the page posts 
//@desc To edit the page post 
//@url  POST api/v1/page/post/edit 

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorResponse = require("../../utils/errorhandler");

exports.pagePostEdit = asynchandler(async (req,res,next)=>{
    if(!req.page) return next(new ErrorResponse("middleware error",500))
    if(!req.page.role == "creater") return next(new ErrorResponse("Not authorized",420))
    
    try {
       const updatedata = {}
       if(req.body.title) updatedata.title = req.body.title 
       if(req.body.description) updatedata.description = req.body.description
       if(req.body.data) updatedata.data = req.body.data
       const data  =  await client.posts.update({
        where:{
            postid:req.body.postid
        },
        data:updatedata
       }) 
    } catch (err) {
        return next(new ErrorResponse(err.message,500))
    }
})

