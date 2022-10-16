// to get the profile of specified profile id 
//@desc to view the other profile
//@url  api/v1/profile/:profileid
//@access Private 


const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorResponse = require("../../utils/errorhandler");
const {filterUsers} = require("../../utils/utilityfuc"); 

exports.getProfile = asynchandler(async (req,res,next)=>{
    try{
      if(!req.params.profileid) return next(new ErrorResponse("invaild request parameter",402))
      const profile = await client.profile.findUnique({
        where:{
                id:req.params.profileid,
        },
        include:{
          following:{
            select:{
              title:true,
              logpic:true,
            }
            
            
          }
          ,
          usereducation:{
            select:{
              startDate:true,
              endDate:true,
              course:true,
              student:{
                select:{
                  name:true,

                }
              }

            }
          },
          companys:{
            select:{
              startDate:true,
              endDate:true,
              description:true,
              position:true,
              company:{
                select:{
                  name:true,
                  description:true
                }
              }
            }
          },
          skills:{
            select:{
              description:true,
              certificate:true,
            }
          },
          activity:{
            take:6,
            skip:1,
            select:{
              type:true,
              message:true,
            }
          }
        }
        
      })
    if(!profile) return next(new ErrorResponse("profile not found",404))
    //getting the mutual connection 
    let connection = await client.connection.findMany({
      where:{
        OR:[
          {receiverid:req.user.id},
          {senderid:req.user.id}
        ],
        ismutual:true
      },
      select:{
        receiverid:true,
        senderid:true
      }
    })  
    let mutualConnection = []
      //filtering the users
      if(connection.length>0)
      {connection = await filterUsers(connection,req.user.id);
      mutualConnection = await client.connection.count({
        
        where:{
          OR:[
           {
             receiverid:req.params.profileid,
             senderid:{
              in:connection
             }
           },
           {
            senderid:req.params.profileid,
            receiverid:{
              in:connection
            }
           }
          
        ]

        },
                
      
      })
    }

      //getting the address details 
      const address = await client.address.findUnique({
        where:{
          id:profile.addressid
        },
        select:{
          country:true,
          state:true,
          city:true,

        }
      })
    //adding the viewed recorde 
    await client.viewer.upsert({
      where:{
        profileid_viewerid:{
          profileid:req.params.profileid,
          viewerid:req.user.id,
        }
      },
      update:{
        viewedAt:new Date(Date.now())
      },
      create:{
        profileid:req.params.profileid,
        viewerid:req.user.id,
        viewedAt:new Date(Date.now())
      }
    })
    
    res.status(200).json({
      status:true,
      profile,
      mutualConnection,
      address
    })
    }
    catch(err){
        return next(new ErrorResponse(err.message,404))
    }
})