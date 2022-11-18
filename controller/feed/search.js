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
    let search = {contains:req.params.keyword,mode:"insensitive"}
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
            logpic:true,
        },
        where:{
           OR:[
            {title:search},
            {description:search},

           ]
        },
    }),
    client.posts.findMany({
        take:3,
        where:{
            OR:[ {title:search},
            {description:search},
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
        
        
        
    }),
    client.hashtag.findMany({
        where:{
            OR:[
                {tag:search}
            ]
        }
    })


])
console.log(data)
let result = []
let temp = []
if(data[0].status=='fulfilled') result.push(data[0].value);
if(data[1].status=='fulfilled') {
    data[1].value.forEach(ele=>{
        let obj = {} 
        obj.id = ele.id
        obj.description = ele.description
        obj.profilepic = ele.logpic 
        obj.firstName  = ele.title 
        obj.lastName = ""
        temp.push(obj)

    })
    result.push([...temp])
}
if(data[2].status=='fulfilled'){
    temp = []
    
    data[2].value.forEach(ele=>{
        let obj ={} 
        obj.id = ele.id
        obj.description = ele.title
        obj.profilepic = ele.userpost.profilepic 
        obj.firstName  = ele.userpost.firstName
        obj.lastName = ""
        temp.push(obj) 
    })
    result.push([...temp])
}
res.status(200).json({
    status:true,
    result
    
})  
  }catch(err) { return next(new ErrorResponse(err.message,500))}

})



