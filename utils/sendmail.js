const nodemailer = require('nodemailer')


transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    secure:true,
    port:465,
    auth:{
        user:process.env.MAIL_ID,
        pass:process.env.MAIL_PASS
    }
});

exports.send = async function(obj){
   const message =  {
     from:process.env.MAIL_ID,
     to:obj.mailid,
     subject:obj.sub,
     html:`<div style='border:2px solid red;width:'>
            <div style='background-color: #FFFFFF;'>
            ${obj.message} 
            </div>
            <div style='border:2px solid black'>
             ${obj.url}
             </div>
           </div>`
    
   }
   console.log(obj)
   const report = await transporter.sendMail(message)
   


}
// need a message object  containing
//{       
//      mailid: sender email
//      sub : suject of the mail 
//      message: content of the mail 
//      url: route to need for verfication 
// }

