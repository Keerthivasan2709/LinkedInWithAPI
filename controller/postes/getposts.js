const asynchandler = require("../../middleware/asynchandler")
const client = require("../../utils/database")
const ErrorResponse = require("../../utils/errorhandler")

//@desc Gets the post from the global and community
//@url GET api/v1/post?page=1
//@access Private 
exports.getPosts = asynchandler( async (req,res,next)=>{
    try{
        console.log("routes working")
        let page = 0 ;
        if(req.query.page) page = req.query.page

    const data = await client.posts.findMany({
        
        skip:(page)*7,
        take:7,
        where:{
            profileid:{
                not: req.user.id
            },
        },
        
        include:{
            likes:{
                select:{
                    likedby:{
                        select:{
                            firstName:true,
                            profilepic:true,
                        }
                    }
                }
            },
            hashtag:{
                select:{
                    tag:true
                }
            },
            data:{
                select:{
                    data:true,
                    type:true,
                    
                }
            },
            userpost:{
                select:{
                    profilepic:true,
                    firstName:true,
                    companys:{
                        select:{
                          company:{
                            select:{
                                name:true
                            }
                          },
                          position:true
                          
                        },
                        
                    }
                },
                
                
            } , 
            _count:{
                select:{
             likes:true,
             comments:true,
             
                }
            }
        },
        orderBy:{
            createdAt:'asc',
        }
        
        
    })
    console.log(req)  
    for await (let ele of data){
         let following  = await client.peopleFollowed.count({
            where:{
               followed:ele.profileid 
            }
        
         })
         ele.followers = following
         const check = await client.like.count({
            where:{ postid:ele.id,
                    userid:req.user.id}
         })
         ele.isLiked = true;
         if(!check || check==0) ele.isLiked = false;
         const check2  = await client.peopleFollowed.count({
            where:{
                followed:ele.profileid,
                follower:req.user.id,
            }
         })
         
         ele.isFollowed = true 
         if(!check2 || check2==0) ele.isFollowed = false
        //  ele.date  = dateformate(ele.createdAt,ele.updatedAt)
         
        
    } 
        
        data.forEach(ele => ele.data.forEach(ele=>ele.ContentType = ele.type))
        res.status(200).json({
        data
    })
}
catch(err) { return next(new ErrorResponse(err.message,402))}

})

// additional utility function

// function dateformate(start,end){
//         if(end != null) start = end  
//         let temp = Date.now() - new Date(start).getTime()
//         temp = (temp/1000).toFixed(0) ; 
//         if(temp/1000 < 59 ) return temp.toString() + "s" 
//         temp = (temp/60).toFixed(0) ; 
//         if(temp/60 < 60) return temp.toString() + "m";
//         temp = (temp/60).toFixed(0) ;
        

    
//     }