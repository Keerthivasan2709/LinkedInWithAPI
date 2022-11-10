const asynchandler = require("../../middleware/asynchandler");
const bcrypt = require("bcryptjs");
const client = require("../../utils/database");
const ErrorResponse = require("../../utils/errorhandler");
const { generateTokenResponce } = require("../../utils/generateToken");
const {User,Profile,Address} = require('../../utils/validation');



//@desc  To verify the user througth
//@url   POST api/v1/user/verify/
//@access Public

exports.verifyRegistration = asynchandler(async (req, res, next) => {
  let {
    email,
    password,
    firstName,
    verificationcode,
    role,
    secondName,
    city,
    state,
    country,
    positionRole,
    organization,
    startDate,
    endDate, 
    course,
    description,
    phoneNumber
  } = req.body;
  
  const verify = await client.verification.findFirst({
    where: {
      email,
      token: verificationcode,
      expiretime: {
        gte: Date.now(),
      },
    },
  });
  
  if (!verify) return next(new ErrorResponse("Invaild otp..", 405));

  //deleting the record
  await client.verification.delete({ where: { email } });

  

  // validating the user data 
  try{
    User.validate({email,password})
  }
  catch(err){ return next(new ErrorResponse(err.message+" user ",405))}
  //encripting the password
  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);

  // creating the user
  const data = await client.users.create({
    data: {
      email,
      password,
    },
  });
  try {
    let addressid = await client.address.findFirst({
      where:{
        city:{
          mode:"insensitive"
        },
        state:{
          mode:"insensitive"
        },
        country:{
          mode:"insensitive"
        },
        
      },
      select:{
          id:true
      }
    })
    console.log("working till address")
    if(!addressid){
      // verifiing the address 
      try{ Address.validate({city,state,country})}
      catch(err){ return next(new ErrorResponse(err.message,405))}
      addressid = await client.address.create({
        data:{
          city:city.toLowerCase(),
          state:state.toLowerCase(),
          country:country.toLowerCase(),
        }
      })
    }
  
    // profile information verification 
    try {
      Profile.validate({firstName,secondName,role})
    } catch (error) {
      return next(new ErrorResponse('profile error:'+error.message,405))
    }
    // creating the profile
    console.log("creating the profile")
    let data2 = await client.profile.create({
      data: {
        userid: data.uid,
        firstName:firstName,
        lastName:secondName,
        addressid: addressid.id,
        description,
        mobileNumber: phoneNumber?phoneNumber:null
      },
    });
    console.log("created the profile",data2)

    //generate json token for authentication
    const { token, options } = generateTokenResponce({
      id: data.uid,
      type: data.type?data.type:"user",
      email: data.email,
    });

    try {
      await client.users.update({
        where: {
          uid: data.uid,
        },
        data: {
          jsontoken: token,
        },
      });
    } catch (err) {
      return next(new c("Unable to set token", 406));
    }
    if("student" == role.toLowerCase()){
      let organ = await client.institution.findFirst({
        where:{
          name:{
            contains:organization,
            mode:'insensitive'
          }
        
        }
      })
      await client.userEducation.create({
        data:{
          startDate: new Date(startDate),
          endDate:new Date(endDate),
          course:course,
          student:{
            connect:{
              id:organ.id
            }
          },
          useredu:{
            connect:{
              id:data2.id,
            }
          }
        }
      })
    }
    else{
      let organ = await client.company.findFirst({
        where:{
          name:{
            contains:organization,
            mode:'insensitive'
          }
        
        }
      })
      await client.userCompany.create({
        data:{
          startDate:new Date(startDate),
          endDate:new Date(endDate),
          position:course,
          company:{
            connect:{
              id:organ.id,
            }
           
          },
          usercompany:{
            connect:{
              id:data2.id,
            }
          }
        }
      })
    }
    
    // // creating the role data 
    // if ("student" == role.toLowerCase()) {
    //   // console.log("student entry")
    //  try{ await client.profile.update({
    //     where:{
    //       id:data2.id,
    //     },
    //     data:{

    //       usereducation:{
    //         create:{
    //         startDate:new Date(startDate),
    //         endDate:new Date(endDate),
    //         course,
    //         student:{
    //           connect:{
    //             in:organization
    //             }
    //           }
            
    //         },
            
    //       },
          
    //     }

        
    //   })
    // }
    // catch(err) { return next(new ErrorResponse(err.message+" edu",402))}  
    // }
    // else{
    //   await client.profile.update({
    //     where:{
    //       id:data2.id
    //     },
    //     data:{
    //         companys:{
    //           create:{
    //             startDate:new Date(startDate),
    //             endDate:new Date(endDate),
    //             position:positionRole,
    //             Domain:course?course:null,
    //             description:description?description:null,
    //             company:{
    //               connect:{
    //                 id:organization
    //               }
    //             }
    //           }
    //         }
    //     }
    //   })
    // }

  
    
   

    
    
    res
      .status(200)
      .cookie("token", token, options)
      .json({ status: true, token })
      .end();
  } catch (err) {
    // await client.users.delete({
    //   where:{}
    // })
    return next(new ErrorResponse(err.message, 401));
  }
});
