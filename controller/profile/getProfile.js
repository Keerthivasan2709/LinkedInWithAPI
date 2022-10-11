// to get the profile of specified profile id 
//@desc to view the other profile
//@url  api/v1/profile/:profileid
//@access Private 


const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorResponce = require("../../utils/errorhandler");
const {filterUsers} = require("../../utils/utilityfuc") 
exports.getProfile = asynchandler(async (req,res,next)=>{
    try{
      const profile = await client.profile.findFirst({
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
      //filtering the users
      connection = await filterUsers(connection,req.user.id)
      const mutualConnection = await client.connection.count({
        
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
    const data  = await client.viewer.findFirst({
      where:{profileid:req.params.profileid,
             viewerid:req.user.id},
      
      
    })
    if(!data){
      await client.profile.update({
        where:{id:req.user.id},
        data:{
          viewed:{
            create:{
              viewerid:req.user.id,
              profileid:req.params.profileid
            }
        },
      }
      })
    } 
    
    res.status(200).json({
      status:true,
      profile,
      mutualConnection,
      address
    })
    }
    catch(err){
        return next(new ErrorResponce(err.message,404))
    }
})