const asynchandler = require('../../middleware/asynchandler')
const client  = require('../../utils/database')
const ErrorHandler = require('../../utils/errorhandler')


exports.connectionMenu = asynchandler(async (req,res,next)=>{
try {
    const sendData = {}
    const connection  = client.connection.count({
        where:{
            OR:[
                {senderid:req.user.id},
                {receiverid:req.user.id}
            ]
        }
    })
    const peopleFollowing = client.peopleFollowed.count({
        where:{
            follower:req.user.id,
        }
    })
    const pageAndHashtag = client.profile.findUnique({
        where:{
            id:req.user.id,
        },
        select:{
            _count:{
                select:{
                    following:true,
                    hashtags:true,
                }
            }
        }
    })
    const data = await Promise.allSettled([pageAndHashtag,peopleFollowing,connection])
    if(data[0].status=='fulfilled'){
        sendData.page = data[0].value._count.following
        sendData.hashtag = data[0].value._count.hashtags
    }
    else{
        sendData.page = 0;sendData.hashtag=0;
    }
    if(data[1].status=='fulfilled'){
        sendData.peopleFollowing = data[1].value
    }
    else{ sendData.peopleFollowing = 0}
    if(data[2].status=='fulfilled'){
        sendData.connection = data[2].value 

    }
    else{sendData.connection = 0}
    sendData.group = 0

    res.status(200).json({
        status:200,
        data:sendData
        })
} catch (error) {
    return next(new ErrorHandler(error.message,500))
}
})
// utility