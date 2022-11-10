const express  = require('express')
const errorhandler = require('../middleware/error')
const app  =  express() 
require("dotenv").config({path:'../.env'})
app.use(express.json())

//importing the module 
const user  = require("./routes/user")


//mounting the routes 
app.use('/api/v1/admin',user)
// app.get('/api/v1/admin',(req,res)=>res.send("working"))

//error handling function
app.use(errorhandler)
app.listen(process.env.ADMIN_PORT_NO,()=>{
    console.log("Admin server running ",process.env.ADMIN_PORT_NO)
    
})