const asynchandler = require("../../middleware/asynchandler")
const client = require("../../utils/database")
const ErrorResponse = require("../../utils/errorhandler")
const {activityUpdate} = require('../../utils/activityManager')

exports.editProfile = asynchandler(async (req,res,next)=>{
    try {
      const profileUpdate = {}  
      const address = {}
      // building the profile update object
      if(req.body.firstName) profileUpdate.firstName = req.body.firstName ;
      if(req.body.secondName) profileUpdate.lastName = req.body.secondName;
      if(req.body.headline) profileUpdate.tagDescription = req.body.headline; 
      await client.profile.update({
        where:{
            id:req.user.id,
        },
        data:profileUpdate
        })
    if(req.body.country){
        address.country = req.body.country.toLowerCase()
    }
    if(req.body.city){
        let temp = req.body.city.split(',')
        address.city = temp[0].trim().toLowerCase()
        address.state = temp[1].trim().toLowerCase()
    }
    let addressid = await client.address.findFirst({
            where:address,
            select:{
                id:true,
            }
                 
        })
    
    if(!addressid){ 
        addressid  = await client.address.create({
        data:address
    })
    }
    if(req.body.position)        
     // logging the activity 
     await activityUpdate({
        userid : req.user.id,
        tagetid: req.user.id,
        messsage:"the profile is update",
        type:"profile"
    })
} catch (error) {
       return next(new ErrorResponse(error.messsage,500)) 
}

    
})
