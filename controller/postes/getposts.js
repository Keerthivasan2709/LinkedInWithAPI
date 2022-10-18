const asynchandler = require("../../middleware/asynchandler")
const client = require("../../utils/database")
const ErrorResponse = require("../../utils/errorhandler")

//@desc Gets the post from the global and community
//@url GET api/v1/post/
//@access Private 
exports.getPosts = asynchandler( async (req,res,next)=>{
    try{
        console.log("routes working")
    const data = await client.posts.findMany({
        
        skip:1,
        take:7,
        where:{
            profileid:{
                not: req.user.id
            },
        },
        
        include:{
            data:true,
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
         
        
    } 
        
        res.status(200).json({
        count: data.length ,
        data
    })
}
catch(err) { return next(new ErrorResponse(err.message,402))}

})