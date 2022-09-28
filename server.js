//imports 
const express = require("express")
const cookieParser = require("cookie-parser")
//setting the environment variable 
require("dotenv").config()

//importing the routes
const user = require("./routes/user")
const profile  = require("./routes/profile")
const post = require("./routes/posts")
const connection = require("./routes/connection")
const comment = require("./routes/comment")

//imorting the middleware functions
const {protect} = require("./middleware/auth")
const errorhandler = require('./middleware/error')

// setting the exprtess app 
const app = express() 

//setting the request body parser 
app.use(express.json())

//setting the cookie parser
app.use(cookieParser())

//setting the routes for the app 
app.use('/api/v1/user',user)

//mounting the auth middle ware 
// app.use(protect)

//seeting the protected routes 
app.use('/api/v1/profile',profile)
app.use('/api/v1/post',post)
app.use('/api/v1/conn',connection)
app.use('/api/v1/post/comment',comment)

//mounting the errorhandling middleware
app.use(errorhandler)

//setting the post for app 
app.listen(process.env.PORT_NO,()=>{
    console.log(`the server is running at ${process.env.PORT_NO}`)
})
// exporting the server

