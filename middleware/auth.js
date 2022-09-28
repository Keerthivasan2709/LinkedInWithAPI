const jwt  = require("jsonwebtoken")
const asynchandler = require("./asynchandler")
const ErrorResponce  = require("../utils/errorhandler")
const client  = require("../utils/database")

exports.protect = asynchandler(async (req,res,next)=>{
    let token ;
    
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(" ")[1]
    }
    // else if(req.cookies.token){
    //     token = req.cookies.token
    // }
    if(!token) return next(new ErrorResponce('Not authorized to this route (token not found)',401));
    try {
    // verify the token of the user 
    const decode = jwt.verify(token,process.env.JWT_SECRET) 
    
    const data = await client.profile.findUnique({
        where:{
            id:decode.id
        },
        select:{
            id:true,
        }
        
    });
    
    data.email = decode.email 
    data.name  = decode.name
    req.user = data
    next()  
    } catch (error) {
        return next(new ErrorResponce('Not authorized to this route(user error)',401));
    }
})
//checking the post doesn't belong to use for liking 


//providing the specific access (primium User) (administrator) 

// future enchancement (need to add field in model)