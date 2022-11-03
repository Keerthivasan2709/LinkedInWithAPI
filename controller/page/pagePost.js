// [imp] only the page creater can post 

const asynchandler = require("../../middleware/asynchandler");

const client = require("../../utils/database");
const ErrorResponse = require("../../utils/errorhandler");

//@desc To create the post for the page 
//@url  POST api/v1/page/post
//@access Private 

exports.createPagePosts = asynchandler(async (req,res,next)=>{
    try {
     
      if(!req.page.role) return next(new ErrorResponse("middleware error",500))
      if(!req.page.role=="editor")  return next(new ErrorResponse("Not authorized",420))
      console.log(req.page.role)
      let {
        id,
        description,
        title,
        }     = req.body
        //checking the user 
    //create the post 
    const post = await client.posts.create({
        data:{
            description,
            title,
            pages:{
                connect:{
                    id
                }
            }
            ,
            userpost:{
                connect:{
                    id:req.user.id
                }
            }
        }
    })
    if(req.body.data){
        for await(let data of req.body.data){
            await client.postData.upsert({
                where:{
                    data,
                },
                update:{
                    post:{
                        connect:{
                           id:post.id
                        }
                    }
                },
                create:{
                    data,
                    type:data.type?data.type:"unknown",
                    post:{
                        connect:{
                            id:post.id
                        }
                    }
                }
            })
        }
      }
      if(req.body.hashtag){
          //data sent ["iot","python","java","c++"]
          for await (let hash of req.body.hashtag){
            await client.hashtag.upsert({
                where:{
                    tag:hash
                },
                update:{
                    posts:{
                        connect:{
                            id:post.id,
                        }
                    }
                },
                create:{
                   tag:hash,
                   posts:{
                    connect:{
                        id:post.id,
                    }
                   } 
                }
            })
          }
      }
   
    res.status(200).json({status:true,data:post})

 

    } catch (err) {
        
        return next(new ErrorResponse(err.message,402))
    }
})
