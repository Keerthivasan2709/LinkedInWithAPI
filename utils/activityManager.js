const client  = require('./database')



//@desc It will log the activity object to database
//@return  id of activity  @type String 
//@gets    activity object  @type Object
exports.activityUpdate= async (obj)=>{
try {
   const data = await client.activity.create({
    data:{
        userid:obj.userid,
        targetid:obj.tagetid,
        message:obj.message,
        type:obj.type
    }
   })
    return data.id
} catch (error) {
    console.log("unable recode the activity")
}

}

// @desc deletes the perticular activity
//@return nothing @type undifined
//@gets  activity id    @type String
exports.deleteActivity = async (id)=>{
    try {
        await client.activity.delete({
            where:{
                id,
            }
        })
    } catch (error) {
        console.log("unable to delete")
    }
}

//@desc deletes all the activity with specified type
//@return nothing @type undifined
//@gets  activity type    @type String

exports.deleteAtivityWithType = async (type)=>{
    try {
        await client.activity.deleteMany({
            where:{
                type,
            }
        })
    } catch (error) {
        console.log("unable to delete the perticular type")
    }
}


// types of activities:
// 1. profile - view profile activity 
// 2. comment - comment to post activity 
// 3. reply -  reply to comment activity 
// 4. likeCom - like to the comment 
// 7. post    - post creation activity
// 8. likeRep  - like to replay activity 
// 9. page     - page create activity 
// 10. follow  - page follow activity 
// 11. account - account activity (password reset,etc)