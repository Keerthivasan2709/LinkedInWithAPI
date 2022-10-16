const asynchandler = require("../../middleware/asynchandler")
const client = require("../../utils/database")
const ErrorResponse = require("../../utils/errorhandler")
const {activityUpdate} = require('../../utils/activityManager')

//@desc   To create a post 
//@url    POST /api/v1/post/create
//@access Private 
exports.createPost = asynchandler( async (req,res,next) => {
  try{ const post = await client.posts.create({
    data:{
        description:req.body.description,
        title:req.body.title,
        data:req.body.data,
        userpost:{
            connect:{
                id:req.user.id
            }
        }

    }
  })
    // loging the activity 
    await activityUpdate({
        userid:req.user.id,
        targetid:post.id,
        message:"the post published",
        type:"post"
        
    })
    
        res.status(200).json({
        status:true,
        message:"the post created"
         }).end()


    }
    catch ( err){return next(new ErrorResponse(err.message,456))}


})