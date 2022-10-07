//to perform seach operation for 
//@desc To search for perticular user, group and post
//@url  GET api/v1/feed/search 
//@access Private 

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorResponse  = require('../../utils/errorhandler');

exports.searchForContent  =  asynchandler( async (req,res,next)=>{
  try{
    const  searchobj = {
        contains:req.query.key
    }
    let data =  await Promise.allSettled([
     client.profile.findMany({
        where:{
            firstName: searchobj,
            description:searchobj,
            lastName:searchobj
        },
        select:{
            id:true,
            profilepic:true,
            firstName:true,
            lastName:true,
            description:true,
        }

    }),
    client.page.findMany({
        where:{
            title:searchobj,
            description:searchobj
        },
        select:{
            id:true,
            title:true,
            description:true,
        }
    }),
    client.posts.findMany({
        where:{
            title:searchobj,
            description:searchobj,
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
        
        
        
    })

])

for(let i=0;i<data.length;i++){
    if(data[i].status=='rejected') data.splice(i,1)
    data[i] = data[i].value
}
res.status(200).json({
    status:true,
    data
    
})  
  }catch(err) { return next(new ErrorResponse(err.message,500))}

})



