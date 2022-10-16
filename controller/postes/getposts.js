const asynchandler = require("../../middleware/asynchandler")
const client = require("../../utils/database")
const ErrorResponse = require("../../utils/errorhandler")

//@desc Gets the post from the global and community
//@url GET api/v1/post/
//@access Private 
exports.getPosts = asynchandler( async (req,res,next)=>{
    try{
    const data = await client.posts.findMany({
        take:7,
        skip:1,
        where:{
            profileid:{
                not: req.user.id
            },

        },
        include:{
            userpost:{
                select:{
                    profilepic:true,
                    firstName:true,
                    companys:{
                        where:{
                            status:"Working"
                        },
                        select:{
                          company:{
                            select:{
                                name:true
                            }
                          },
                          position:true
                        },
                    }
                }
            } , 
            _count:{
                select:{
             likes:true,
             comments:true,
                }
            }
        },
        orderBy:{
            createdAt:'desc',
        }
        
        
    })
      
        res.status(200).json({
        count: data.length ,
        data
    })
}
catch(err) { return next(new ErrorResponse(err.message,402))}

})