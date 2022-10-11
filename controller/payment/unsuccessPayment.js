const { Decimal } = require("@prisma/client/runtime");
const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


//@desc If the Payment is sucess  
//@url GET api/v1/payment/failure?sessionid 
//@access Private 

exports.failurePayment = asynchandler( async (req,res,next)=>{
    try{
    if(!req.query.sessionid) return next(new ErrorHandler("session id not found in url",404))
    const sessionid  = req.query.sessionid
    const session  = await stripe.checkout.sessions.retrieve(sessionid)
    if(!session) return next(new ErrorHandler("session object not found",500))
    const payment  = await stripe.paymentIntents.retrieve(session.payment_intent)
    if(!session) return next("paymentIntent object not found")
    const transactionid  = payment.charges.data[0].id
    const receipturi = payment.charges.data[0].receipt_url
    const email = payment.receipt_email
    
    //adding the transaction details into table
    
    await client.transaction.create({
        data:{
            transactionid,
            userid:session.metadata.userid,
            planid:session.metadata.planid,
            amount: Decimal(payment.amount/100),
            status:session.payment_status,
            paymentMethod:payment.charges.data[0].payment_method_details.type
        }
    })
    res.status(200).json({
        status:false,
        msg:"payment process failed "
    })
}catch(err) {return next(new ErrorHandler(err.message,500))}

})