const express  = require('express')
// const errorhandler = require('../middleware/error')
const app  =  express() 
const cors = require('cors')
require("dotenv").config({path:'../.env'})
app.use(express.json())
app.use(cors())

//importing the module 

const advertisement = require('./routes/advertisment')

// //mounting the routes 
// // app.use('/api/v1/admin',user)
// // app.get('/api/v1/admin',(req,res)=>res.send("working"))
app.use('/api/v1/admin/advertisment',advertisement);

//error handling function
// app.use(errorhandler)
app.listen(process.env.ADMIN_PORT_NO,()=>{
    console.log("Admin server running ",process.env.ADMIN_PORT_NO)
    
})