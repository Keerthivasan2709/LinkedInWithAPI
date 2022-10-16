//to perform seach operation for 
//@desc To search for perticular user, group and post
//@url  GET api/v1/feed/search/:keyword
//@access Private 

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorResponse  = require('../../utils/errorhandler');

exports.searchForContent  =  asynchandler( async (req,res,next)=>{
  try{
    if(!req.params.keyword) return next(new ErrorResponse("search element not found",402))
    let search = {search:req.params.keyword}
    let data =  await Promise.allSettled([
     client.profile.findMany({
        take:3,
        where:{
         OR:[
            {firstName:search},
            {lastName:search},
            {description:search},
            {tagDescription:search}
         ]
        },
        
        select:{
            id:true,
            profilepic:true,
            firstName:true,
            lastName:true,
            description:true,
        },
        

    }),
    client.page.findMany({
        take:3,
        select:{
            id:true,
            title:true,
            description:true,
        },
        orderBy:{
            _relevance:{
                fields:['title','description'],
                search: req.params.keyword,
                sort:'asc'
            }
        }
    }),
    client.posts.findMany({
        take:3,
        where:{
            OR:[ {
            title:{
                search:req.params.keyword
            }  
            },
            {
                description:{
                    search:req.params.keyword
                }
            }  
        ]
        },
        select:{
            id:true,
            title:true,
            profileid:true,
            userpost:{
                select:{
                    profilepic:true,
                    id:true,
                    firstName:true


                },
            },
            
        },
        orderBy:{
           createdAt:'asc'
        }
        
        
        
    })

])
console.log(data)
let result = []
for(let i=0;i<data.length;i++){
    if(data[i].status=='fulfilled') result.push(data[i].value)
    
}
res.status(200).json({
    status:true,
    result
    
})  
  }catch(err) { return next(new ErrorResponse(err.message,500))}

})



