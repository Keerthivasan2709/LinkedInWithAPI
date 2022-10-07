const client = require("./database");

//utility function for the connection 

exports.filterUsers = async (obj,id)=> {
    for(let i=0;i<obj.length;i++){
        if(obj[i].senderid == id) obj[i] = obj[i].receiverid ;    //O(n)  Mem(1)
        else obj[i] = obj[i].senderid
    } 
    return obj
     
}

exports.fetchProfileDetail = async (id) =>{
    return await client.profile.findUnique({
        where:{
            id,
        },
        select:{
            profilepic:true,
            backgroundpic:true,
            firstName:true,
            lastName:true,
            tagDescription:true, 
        }
    })
}

