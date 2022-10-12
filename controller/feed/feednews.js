//@desc To get all the newes 
//@url api/v1/feed/news
//@access Private 

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");

exports.getNews = asynchandler(async (req,res,next)=>{
   try{
     const data  = await client.news.findMany({
        take:5,
        skip:1,
        select:{
            title:true,
            createdAt:true,
            updateAt:true,
            readers:true,

        }

     })
    if(!data) return next(new ErrorHandler("unable to fetch",500))
    
    // getting the no. of days of update 
    data.map(dateFilter)  

    res.status(200).json({
        status:true,
        data
    })

     
     
   }catch(err){return next(new ErrorHandler(err.message,500))} 
})


//adding the date filter 
function dateFilter(data){
    if(data.updateAt=='null') data.days = (new Date() - new Date(data.createdAt))/(24*60*60*1000)
    else data.days = (new Date(data.updateAt) - new Date(data.createdAt))/24*60*60*1000 
}

