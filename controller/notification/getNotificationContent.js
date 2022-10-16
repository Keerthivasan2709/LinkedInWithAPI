//@desc To get the content of the notification 
//@url GET api/v1/notification/:id 
//@access Pivate 

const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");

exports.getSpecificNotification = asynchandler(async (req,res,next)=>{
    try{

        const activity  = await client.activity.findFirst({
            where:{ id:req.params.id},
            select:{
                targetid:true,
                type:true,
                userid:true,
                belongsTo:true
            }
            
        })
        let data;
        if(!activity) return next(new ErrorHandler("notification not found",500))
        const search = {id:activity.targetid}
        if(activity.type == "comment"){
          data = await client.posts.findFirst({
            where:{
                id:activity.targetid,
            }
            ,
            select:{
                title:true,
                description:true,
                data:true,
                comments:{
                    where:{
                       postid:activity.targetid,
                       userid:activity.userid
                    },
                    select:{
                        description:true,
                        createdAt:true,
                    }
                }
            }
          })   
        }
        else if(activity.type == "follow"){
            data  = await client.page.findFirst({
                where:search,
                include:{
                    posts:true,
                    _count:{
                        select:{
                         followers:true
                        }
                    }

                }
            })
        }
        else if(activity.type == "likeCom"){
            data = await client.comments.findFirst({
                where:search,
                include:{
                    
                    replays:true,
                    _count:{
                        select:{
                            liked:true,
                            replays:true,
                        }
                    }
                }

            })
        }
        else if(activity.type == "likeRep"){
            data  =  await client.replay.findFirst({
                where:search,
            })
        }
        else if(activity.type == "profile"){
            if(req.user.premium){
            data = await client.profile.findFirst({
                where:search,
                include:{
                    skills:true,
                    companys:true,
                    usereducation:true,
                    following:{
                        select:{
                            title:true,
                            logpic:true,
                        }
                    },
                    hashtags:{
                        select:{
                            tag:true,
                        }
                    }
                }
            })
        }
            if(data.premium){}
        }
    
       if(!data) return next("unable to fetch content",500) 
       res.status(200).json({
        status:true,
        data
       })   

    }catch(err) { return next(new ErrorHandler(err.message,500))}
})