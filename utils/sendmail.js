const nodemailer = require('nodemailer')


transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    secure:true,
    service:'google',
    auth:{
        user:process.env.MAIL_ID,
        pass:process.env.MAIL_PASS
    }
});

exports.send = async function(obj){
   // console.log(process.env.MAIL_ID,process.env.MAIL_PASS,mailid,resetcode)
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
   const report = await transporter.sendMail(message)
   


}


