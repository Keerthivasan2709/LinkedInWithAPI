
const client  = require('./database')
const {filterUsers} = require('./utilityfuc')

exports.mutualConnection  = async (userid,mutualid) =>{
let connection = await client.connection.findMany({
    where:{
      OR:[
        {receiverid:userid},
        {senderid:userid}
      ],
      ismutual:true
    },
    select:{
      receiverid:true,
      senderid:true
    }
  })  
  let mutualConnection = 0;
    
    if(connection.length>0)
    {connection = await filterUsers(connection,userid);
    mutualConnection = await client.connection.count({
      
      where:{
        OR:[
         {
           receiverid:mutualid,
           senderid:{
            in:connection
           }
         },
         {
          senderid:mutualid,
          receiverid:{
            in:connection
          }
         }
        
      ]

      },
              
    
    })
  }
return mutualConnection
}