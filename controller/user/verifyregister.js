const asynchandler = require("../../middleware/asynchandler");
const bcrypt = require("bcryptjs");
const client = require("../../utils/database");
const ErrorResponce = require("../../utils/errorhandler");
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
    description
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
  
  if (!verify) return next(new ErrorResponce("Invaild otp..", 405));

  //deleting the record
  await client.verification.delete({ where: { email } });

  

  // validating the user data 
  try{
    User.validate({email,password})
  }
  catch(err){ return next(new ErrorResponce(err.message+" user ",405))}
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
    if(!addressid){
      // verifiing the address 
      try{ Address.validate({city,state,country})}
      catch(err){ return next(new ErrorResponce(err.message,405))}
      addressid = await client.address.create({
        data:{
          city,
          state,
          country
        }
      })
    }
    // profile information verification 
    try {
      Profile.validate({firstName,secondName,role})
    } catch (error) {
      return next(new ErrorResponce('profile error:'+error.message,405))
    }
    // creating the profile 
    const profile = await client.profile.create({
      data: {
        userid: data.uid,
        firstName:firstName,
        lastName:secondName,
        addressid: addressid.id,
        description
      },
    });
   
    // creating the role data 
    if ("student" == role.toLowerCase()) {
      // console.log("student entry")
     try{ await client.profile.update({
        where:{
          id:profile.id,
        },
        data:{

          usereducation:{
            create:{
            startDate:new Date(startDate),
            endDate:new Date(endDate),
            course,
            student:{
              connect:{
                id:organization
                }
              }
            
            },
            
          },
          
        }

        
      })
    }
    catch(err) { return next(new ErrorResponce(err.message+"edu",402))}  
    }
    else{
      await client.profile.update({
        where:{
          id:profile.id
        },
        data:{
            companys:{
              create:{
                startDate:new Date(startDate),
                endDate:new Date(endDate),
                position:positionRole,
                Domain:course?course:null,
                description:description?description:null,
                company:{
                  connect:{
                    id:organization
                  }
                }
              }
            }
        }
      })
    }

  
    
   

    
    //generate json token for authentication
    const { token, options } = generateTokenResponce({
      id: profile.id,
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
    res
      .status(200)
      .cookie("token", token, options)
      .json({ status: true, token })
      .end();
  } catch (err) {
    client.users.delete({ where: { uid: data.uid } });
    client.profile.delete({where:{id:profile}})
    return next(new c("unable to create profile", 401));
  }
});
