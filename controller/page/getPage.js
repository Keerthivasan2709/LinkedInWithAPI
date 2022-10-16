// to get a spectic page 

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorResponse =  require("../../utils/errorhandler")

//@desc  To get all the information about page 
//@url   GET api/v1/page/:pageid
//@access Private 

exports.viewPage = asynchandler(async (req,res,next)=>{
       // adding the view count
    try {
        await client.page.updateMany({
            where:{
                id:req.params.id,
            },
            data:{
                viewed:{increment:1}
            },
        })

        const data = await client.page.findFirst({
            where:{
                id:req.params.pageid,
            },
            include:{
                posts:true,
                followers:{
                  select:{
                    profilepic:true,
                  }
                },
                _count:{
                    select:{
                        followers:true,
                        posts:true
                    }
                }
                
            }
        })
        
        res.status(200).json({
            status:true,
            data
        })
        
    } catch (error) {
        return next(new ErrorResponse(error.message,402))
    } 
       
        
       
})