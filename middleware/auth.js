const jwt  = require("jsonwebtoken")
const asynchandler = require("./asynchandler")
const ErrorResponce  = require("../utils/errorhandler")
const client  = require("../utils/database")
const { PlanStatus } = require("@prisma/client")

exports.protect = asynchandler(async (req,res,next)=>{
    let token ;
    
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(" ")[1]
    }
    else if(req.cookies.token){
        token = req.cookies.token
    }
    if(!token) return next(new ErrorResponce('Not authorized to this route (token not found)',401));
    try {
    // verify the token of the user 
    const decode = jwt.verify(token,process.env.JWT_SECRET) 
       
    //getting the user plan 
    const plan = await client.userPlan.findFirst({
        where:{userid:decode.id,
               planstatus:PlanStatus.ACTIVE},
    })
    
    let premium;

    if(plan){
        if(new Date(plan.endsAt)>new Date(Date.now())) {
        
        premium = true
     }
     else{
         await client.userPlan.update({
            where:{
              id:plan.id
            },
            data:{
              planstatus:PlanStatus.EXPIRE  
            }
        })
         premium = false

     }
    }
    else{
        premium = false
    }
     

    const data = await client.profile.update({
        where:{
            userid:decode.id
        },
        data:{
           premium, 
        },
        
        
    });
    
    

    
    //checking the plan validity 
    
    req.user = {id:data.id,type:decode.type,email:decode.email,premium}
    next()  
    } catch (error) {
        return next(new ErrorResponce('Not authorized to this route(user error)',401));
    }
})
//checking the post doesn't belong to use for liking 


//providing the specific access (primium User) (administrator) 

// future enhancement (need to add field in model)