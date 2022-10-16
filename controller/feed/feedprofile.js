const asynchandler = require('../../middleware/asynchandler')
const client = require('../../utils/database')
const ErrorResponce = require('../../utils/errorhandler')

// feed profile info 
//@desc To provide feed profile info
//@url  GET api/v1/feed/profile
//@access Private

exports.feedProfile  = asynchandler(async (req,res,next)=>{
    const profileinfo = client.profile.findFirst({
        where:{
            id:req.user.id,
        },
        select:{
            firstName:true,
            lastName:true,
            profilepic:true,
            backgroundpic:true,
            _count:{
                select:{
            viewed:true,
                }
            }

        },
        
    })
    const connectionCount =  client.connection.count({
        where:{
            OR:[
                { senderid: req.user.id },
                {senderid:req.user.id}
            ],
            ismutual:true

        }
    })
    try{
    const data = await Promise.all([profileinfo,connectionCount])
    const feeddata = {
        profile: data[0],
        connection:data[1]
    }
    res.status(200).json({
        status:true,
        data:feeddata
    })
    }
    catch(err){ return next(new ErrorResponce(err.message,404))}
    

})