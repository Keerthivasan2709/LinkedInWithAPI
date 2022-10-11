const { Decimal } = require("@prisma/client/runtime");
const asynchandler = require("../../middleware/asynchandler");
const client = require("../../utils/database");
const ErrorHandler = require("../../utils/errorhandler");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const {send} = require('../../utils/sendmail')

//@desc If the Payment is sucess  
//@url GET api/v1/payment/success?sessionid 
//@access Private 

exports.successfullPayment = asynchandler( async (req,res,next)=>{
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

    //updating the user plan 
    let plan  = await client.plans.findUnique({where:{id:session.metadata.planid}})
    
    let data = await client.userPlan.create({
        data:{
            userid:session.metadata.userid,
            planid:plan.id,
            startedAt: new Date(Date.now()),
            endsAt:new Date(Date.now()+plan.valdity*24*60*60*1000)
        }
    })
    if(!data) return next(new ErrorHandler("plan Update failed",500))

    //sending the user about the plan purchase details 
    await send({
        mailid:email,
        subject:"This mail sent regarding the Premium Subscription",
        html:` <div style="boarder:2px solid #000 ; hight:300px;width:400px">
               <h3 style="padding:5px;"> To view your Inovice click the button</h3>
               <a style="higth:25px;width:50px;box-shadow: 1px 1px gray;background-color:'blue';text-decoration:none;color:#fff" href=${receipturi}>
                View Invoice
               </a>
               </div>`
    })


    res.status(200).json({
        status:true,
        data
    })
    



    

}catch(err){return next(new ErrorHandler(err.message,500))}     
})