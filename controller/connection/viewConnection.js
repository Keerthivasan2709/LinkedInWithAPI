const asynchandler = require("../../middleware/asynchandler")
const ErrorResponce  = require("../../utils/errorhandler")
const client  = require("../../utils/database")
const {filterUsers} = require("../../utils/utilityfuc")

//@desc  to View all the connections
//@url GET api/v1/conn/view
//@access Private 

exports.viewConnection = asynchandler(async (req,res,next)=>{
   try{
    let data  = await client.connection.findMany({
        where:{
            OR:[
                {
                    senderid:req.user.id
                },
                { 
                    receiverid:req.user.id
                }
            ],
            ismutual:true 

        },
        select:{
          receiverid:true,
          senderid:true
        }
    })
    //filering the users
    if(data.length<=0) return res.status(200).json({status:true,data })
    data = await filterUsers(data,req.user.id)
    // console.log(data)
    //fetching all the profile detailes for the user 
    data = await fetchProfile(data)

    // console.log(data)
    if(!data) return next(new ErrorResponce("unable to fetch",404))
    res.status(200).json({
        count:data.length,
        data
    })
}
catch(err){ return next(new ErrorResponce(err.message,500))}
  

})

// sub utility functions 

async function fetchProfile(data){
    let result = []
    for await (let id of data){
       const profile = await client.profile.findUnique({
        where:{
            id
        },
        select:{
            id:true,
            profilepic:true,
            firstName:true,
            lastName:true,
            tagDescription:true,
            backgroundpic:true
        }
      })
      result.push(profile)
    
    }
    return result
}  