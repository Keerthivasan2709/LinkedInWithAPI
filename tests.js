const { date } = require("joi");
const Stripe = require("stripe")
const stripe = Stripe("sk_test_51LrI7dSEZHENsIXA2gcb1zrQlMBHUZvkRC8huygo4LDjH3atEEm0Ttrzcexr0dLkXyVdMiIPCbh2LOP47mDVq1pa00fiMFQ8SE");

// const cus = stripe.customers.retrieve(
//     'cus_MaRtcsAhNVPOUp'
// ).then(console.log)
// .catch(console.log)
(async ()=>{
// const cus  = await stripe.customers.create({
//     email:"aswin28800@gmail.com"
// });

// const session = await  stripe.checkout.sessions.create({
//     payment_method_types:['card'] ,
//     line_items:[
//         {   
//             price_data:{
//                 currency:"INR",

//                 product_data:{
//                     name:"aswin kumar",
                    
//                 },
//                 unit_amount:1200*100,
//             },
//             quantity: 1, 
//          },
         
        
//     ],
//     metadata:{
//         planid:"123654789",
//         userid:"159887965",
//     },
//     expires_at: Date.now()+ (60),
//     customer:'cus_MaTGnkCm8OZIBJ',
//     mode:"payment",
//     success_url: `http://localhost:5500/payment-success/{CHECKOUT_SESSION_ID}`,
//     cancel_url:`http://localhost:5500/payment-failer`,
// });
// const session = await stripe.checkout.session.expaire(
//   'cs_test_a1kJsrW9k1bVk4tlMOvnTwTU84tvopNZPxWqErAm4W8idFKRDqArOwFtqh'
// )?
// let sessionid = 'cs_test_a1p7CW6ON0P8cfDbCd0tj9s9zY5mspDXyCiM9NFgq8d79LoetkEMO4UyT1'
//  const session  = await stripe.checkout.sessions.retrieve(
//    sessionid
// );

// console.log(session)
// const payment_intent = session.payment_intent 
// const payment = await stripe.paymentIntents.retrieve(payment_intent)
// console.log(payment)
// console.log("-------------------")
// console.log(payment.charges.data[0])
console.log(new Date(Date.now()+30*24*60*60*1000))

})();
