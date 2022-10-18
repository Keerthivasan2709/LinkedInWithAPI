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
     res.status(200).json({status:true,data})
   

            
     // logging the activity 
     await activityUpdate({
        userid : req.user.id,
        tagetid: req.user.id,
        messsage:"the profile is update",
        type:"profile"
    })
} catch (error) {
      console.log(error)
       return next(new ErrorResponse(error.messsage,500)) 
}

    
})
