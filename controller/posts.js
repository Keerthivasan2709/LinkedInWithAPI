// creating the user controller object with controller method
const asynchandler = require("../middleware/asynchandler")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const client = require("../utils/database")
const ErrorResponse = require("../utils/errorhandler")

const object  = {} 

//@desc     To get the post
//@url      GET /api/v1/post/my    
//@access   Private
object.getMyPosts = asynchandler( async (req,res,next) => {
    const data = await client.posts.findMany({
        where:{
            profileid: req.user.id
        },
        include:{
            likes:true
        }
        })
    if(!data) return next(new ErrorResponse("there is no posts",423))
    data.forEach(ele=>{
        ele.liked = ele.likes.length
    })
    res.status(200).json({
        count: data.length ,
        data
    })
})    

//@desc   To create a post 
//@url    POST /api/v1/post/create
//@access Private 
object.creatPost = asynchandler( async (req,res,next) => {
    client.posts.create({
        data:{
            profileid:req.user.id,
            description:req.body.description,
            title:req.body.title,
            data:req.body.data
        }
    }).then(result=>{
        res.status(200).json({
        status:true,
        message:"the post created"
         }).end()
    })
    .catch ( err=>next(new ErrorResponse(err.message,456)))


})

//@desc Gets the post from the global and community
//@url GET api/v1/post/
//@access Private 
object.getPosts = asynchandler( async (req,res,next)=>{
    const data = await client.posts.findMany({
        where:{
            profileid:{
                not: req.user.id
            },

        },
         include:{
             likes:true,
        }
    })
    
    if(!data) return next(new ErrorResponse("there is no posts",423))
    data.forEach(ele=>{
        ele.liked = ele.likes.length
        
    })
     
    //  for(let i =0 ;i<data.length;i++){
    //     client.profile.findUnique({
    //          where:{ id : data[i].profileid},
    //           select:{ profilepic:true,firstName:true,lastName:true}
    //       }).then(console.log).catch(console.log)
    //     console.log(data[i].profileid)
    //  }
        res.status(200).json({
        count: data.length ,
        data
    })

})

//@decs  Put like the post
//@url   POST api/v1/post/like/:postid
//@access Private 
object.like = asynchandler(async (req,res,next)=>{
   
    const data  = await client.posts.findFirst({
        where:{
            id:req.params.postid,
            profileid:{
                not:req.user.id 
            }
        },
        select:{
            likes: {
                where:{
                    userid:req.user.id 
                },
                select:{
                    id:true
                }
            },
        },
    })
    if(!data){
        client.posts.update({
            where:{
               id:req.params.postid
            },
            data:{
                likes:{
                   create:{
                       userid:req.user.id,
                       type:req.body.type
                   }
                }
            }
        })
        .then(result=> res.status(200).json({liked:true}))
        .catch(err=> res.status(458).json({status:false})) 
    }
    else{
        if (data.likes.length == 0){
            client.posts.update({
                where:{
                   id:req.params.postid
                },
                data:{
                    likes:{
                       create:{
                           userid:req.user.id,
                           type:req.body.type
                       }
                    }
                }
            })
            .then(result=> res.status(200).json({liked:true}))
            .catch(err=> res.status(458).json({status:false,msg:err.message})) 
                 
        }
        else{

        client.like.delete({
             where:{
                id:data.likes[0].id 
             }
        })
        .then(result => res.status(200).json({liked:false}))
        .catch(err => res.status(451).json({status:false,msg:err.message}))
    }
     }
    
})





//freezing the object for securing the function  
Object.freeze(object)


// exporting the user controller object 
module.exports = object 


