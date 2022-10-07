// recommended postes for the user

const ErrorResponce = require('../../utils/errorhandler')
const asynchandler = require('../../middleware/asynchandler')
const client = require('../../utils/database')

exports.recommendedPosts = asynchandler(async (req,res,next)=>{
   try{

    const pageposts = await client.profile.findMany({
        where:{
           id:req.user.id
        },
       include:{
          following:{
               include:{
                  
                posts:{
                  take:7,
                  skip:1,
                  include:{
                     userpost:{
                        select:{
                           profilepic,
                           firstName
                        }
                     }
                  },
                  orderBy:{
                     createdAt:'desc'
                  }
                }
               }
          }
       } 
    })
    let friends = await client.connection.findMany({
      where:{
        senderid:req.user.id,
        ismutual:true             
      },
        select:{
         receiverid:true
        }
    })
    friends.concat( await client.connection.findMany({
      where:{
         receiverid:req.user.id,
         ismutual:true
      },
      select:{
         senderid:true,
      }
      
    }))
    friends.forEach(ele=>{
      if(!ele.receiverid) ele = ele.receiverid
      if(!ele.senderid) ele = ele.receiverid
    })
    if(pageposts) return res.status(200).json({status:true,data:pageposts})
    
   const friendpost  = client.profile.findMany({
      take:7,
      skip:1,
      where:{
         id:{
         in:friends,
         }
         
      },
      include:{

         posts:
         {
            include:{
               userpost:{
                  select:{
                     profilepic,
                     firstName
                  }
               }
            }
         }
      }
   }) 
   res.status(200).json({status:true,data:friendpost}) 
       
}
   catch(err){
    return next(new ErrorResponce(err.message,406))
   }
   

})

