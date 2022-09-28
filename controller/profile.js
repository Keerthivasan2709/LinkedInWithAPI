// creating the user controller object with controller method
const asynchandler = require("../middleware/asynchandler")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const client = require("../utils/database")
const ErrorResponse = require("../utils/errorhandler")
const { company, userEducation } = require("../utils/database")

const object  = {} 

//@desc     To get the user profile 
//@url      POST /api/v1/profile    
//@access   Private
object.getProfile = asynchandler( async (req,res,next) => {
    const data = await client.profile.findUnique({
        where:{
            id:req.user.id
        },
        select:{
             firstName:true,
             lastName:true,
             profilepic:true, 
             mobileNumber:true,
             description :true,
             tagDescription:true,
            
         },
         
    })

    // adding the company details 
    data.company = {
        count:0,
        companyinfo:["Add Company information"]
    }  
    //adding the education details  
    data.education = {
        count:0,
        instituteinfo : ["Add education information"] 
    }
    //adding the skills 
    data.skillsets = {
        count : 0, 
        skills:["Add the skill set "]
    }
    //adding the posts
    data.posts = {
         count:0,
          Posts: ["Create the posts"]
    }
    //adding the connection 
    data.connection = {
          count : 0,
          followers:   "Build the connections"
    }
    data.name  = req.user.name 
    data.email = req.user.email
    res.status(200).json(data).end()
    })

//@desc   To edit the user profile
//@url    POST /api/v1/profile/edit
//@access Private 
object.editProfile = asynchandler( async (req,res,next) => {
 })

//@desc    GET the user dashboard 
//@url     GET api/v1/user/home
//@access  Private


//freezing the object for securing the function  
Object.freeze(object)


// exporting the user controller object 
module.exports = object 
