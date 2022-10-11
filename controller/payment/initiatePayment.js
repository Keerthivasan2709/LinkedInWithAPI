const asynchandler = require('../../middleware/asynchandler')
const ErrorHandler = require('../../utils/errorhandler')


const Stripe = require('stripe')
const client = require('../../utils/database')

//@desc To initiate payment 
//@url POST api/v1/payment 
//@access private 

exports.intiatePayment = asynchandler(async (req,res,next)=>{
     
    try{
        const data = await client.plans.findFirst({
            where:{id:req.body.id},
            select:{
                name:true,
                price:true,
                discount:true,
                valdity:true,
            }
        })
        if(!data) return next(new ErrorHandler("invaild plan",404))

        // calculating gst 
        let gstPrice = (data.price*18)/100;
        //calculating the discount
        let discountPrice =  (data.price*data.discount)/100
        //total price 
        const totalPrice = data.price + gstPrice - discountPrice
        
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
        const session = await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            line_items:[
                {
                    price_data:{
                        currency:"INR",
                        product_data:{
                            name:data.name
                        },
                        unit_amount:totalPrice*100,
                    },
                    Quantity: 1, 
                 },
                 
                
            ],
            metadata:{
               userid:req.user.id,
               planid:req.body.id,
            },
            mode:"payment",

            // setting the url for success and cancel 
            success_url: `${process.env.CLIENT_URL}/payment/success?sessionid={CHECKOUT_SESSION_ID}`,
            cancel_url:`${process.env.CLIENT_URL}/payment/failure?sessionid={CHECKOUT_SESSION_ID}`,
        })
        res.status(200).json({
            status:true,
            url:session.url
        }) 

    
    
    }catch(err){return next(new ErrorHandler(err.message,500))}
})

