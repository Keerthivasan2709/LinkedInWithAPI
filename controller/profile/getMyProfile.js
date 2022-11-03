const asynchandler = require("../../middleware/asynchandler")
const client = require("../../utils/database")
const ErrorResponse = require("../../utils/errorhandler")

//@desc     To get the user profile 
//@url      POST /api/v1/profile/my    
//@access   Private
exports.getMyProfile = asynchandler( async (req,res,next) => {
    const data = await client.profile.findUnique({
        where:{
            id:req.user.id
        },
        // select:{
        //      firstName:true,
        //      lastName:true,
        //      profilepic:true, 
        //      mobileNumber:true,
        //      description :true,
        //      tagDescription:true,
            
        //  },
         include:{
        
            usereducation:{
                select:{
                    course:true,
                    startDate:true,
                    endDate:true,
                    student:{
                        select:{
                            name:true,
                            description:true
                        }
                    }
                }
            },
            companys:{
                select:{
                    position:true,
                    startDate:true,
                    endDate:true,
                    status:true,
                    company:{
                        select:{
                            name:true,
                            description:true
                        }
                    }
                }
            },
            activity:true,
            skills:true,
            following:true

         }
         
    })
    // getting the address details
    //destructuring the array 
    //doing for the education
    data.usereducation.forEach((ele,index) => {
        const obj = {
            course:ele.course,
            startDate:ele.startDate,
            endDate:ele.endDate,
            organization:ele.student

        } 
        data.usereducation[index] = obj

    }
    )
    //doing for company
    data.companys.forEach((ele,index) => {
        const obj = {
            course:ele.position,
            startDate:ele.startDate,
            endDate:ele.endDate,
            organization:ele.company,
            status:ele.status

        } 
        data.companys[index] = obj

    }
    )
    
    const address  = await client.address.findUnique({
        where:{
            id:data.addressid
        }
    })
    data.address = address
    data.email = req.user.email
    res.status(200).json(data).end()
})
