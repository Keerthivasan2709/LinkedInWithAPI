
const joi = require('joi');

const User = joi.object({
    email:joi.string().email({
        minDomainSegments:1,
        tlds:['com']
    }).required()
    ,
    password: joi.string().min(8).max(24).pattern(
        new RegExp('^[a-zA-Z0-9!@#$%^&*]{6,16}$')
    ).required()
  
});

const Profile = joi.object({
    moblieNumber : joi.string().min(10).max(10),
    firstName: joi.string().required(),
    secondName:joi.string().required(),
    profilepic:joi.string(),
    description:joi.string(),
    tagdescription:joi.string(),
    backgroundpic:joi.string(),
    role:joi.string().required()
    // startDate:joi.string(),
    // endDate : joi.string(),
    

}) 

const Message = joi.object({
    message:joi.string().pattern(
        new RegExp('^(?:\s*/(\w+)\s*(\w*)\s*)?((?:.|[\r\n])*)$')
    )
})

const Address = joi.object({
    city:joi.string().required(),
    state:joi.string().required(),
    country:joi.string().required()
})
 


module.exports = {User,Profile,Message,Address}
