const asynchandler = require("../../middleware/asynchandler")
const client = require("../../utils/database")
const ErrorResponse = require("../../utils/errorhandler")
const {activityUpdate} = require('../../utils/activityManager')

exports.editProfile = asynchandler(async (req,res,next)=>{
    try{
      let address ;
      if(req.body.address){
        address = await client.address.upsert({
            where:{
               city_state_country:{
                city:req.body.address?.city.toLowerCase(),
                state:req.body.address?.state.toLowerCase(),
                country:req.body.address?.country.toLowerCase(),
               },
              },
               update:{},
               create:{
                city:req.body.address?.city.toLowerCase(),
                state:req.body.address?.state.toLowerCase(),
                country:req.body.address?.country.toLowerCase(),
               } 

            
        })

         
      }
      
    
      const data  = await client.profile.update({
        where:{
            id:req.user.id,
        },
        data:{
            firstName:req.body?.firstname,
            lastName:req.body?.lastName,
            profilepic:req.body?.profilepic,
            mobileNumber:req.body?.moblieNumber,
            description:req.body?.description,
            tagDescription:req.body?.tagDescription,
            backgroundpic:req.body?.backgroundpic,
            addressid:address?address.id:undefined
        }

      })
      await client.activity.create({
        data:{
            useractivity:{
                connect:{
                    id:req.user.id
                }
            },
            type:"profile",
            message:"the user had updated the profile",
            targetid:req.user.id,
            belongsTo:req.user.id,
            tagetpic:"https://res.cloudinary.com/dibccigcp/image/upload/v1665059590/1659541201558_pb42vz.jpg",
        }
    })
     res.status(200).json({status:true,data})
   

            
     // logging the activity 
     
} catch (error) {
      console.log(error)
       return next(new ErrorResponse(error.messsage,500)) 
}

    
})
