//@desc To get posts of the hashtag
//@url  GET api/v1/hashtag/:tag
//@access Private 

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");

exports.getHashPosts = asynchandler(async (req,res,next)=>{
   try{
    if(!req.params.tag) return next(new ErrorHandler("require tag name to get",400)) 
    const data  = await client.hashtag.findUnique({
        
        where:{
            tag:req.params.tag
        },
        include:{
            
            
            posts:{
                take:4,
                skip:1,
                include:{
                    _count:{
                        select:{
                        comments:true,
                         likes:true,
                        }
                    },
                    userpost:{
                        select:{
                            firstName:true,
                            lastName:true,
                            profilepic:true,
                            companys:{
                                select:{
                                    position:true,
                                    company:{
                                        select:{
                                            name:true,
                                        }
                                    }
                                }
                            }

                        }
                    }
                }
            }
        }
    })
    
    if(!data) return next(new ErrorHandler("unable to fetch",500))
    res.status(200).json({
        status:true,
        data
    })
   }catch(err){
    console.log(err)
    return next(err.message,500)
    }
 

})