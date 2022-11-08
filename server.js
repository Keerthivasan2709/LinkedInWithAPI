//imports 
const express = require("express")
const cookieParser = require("cookie-parser")
const cors  = require('cors')
const path = require('path')
//setting the environment variable 
require("dotenv").config()

//importing the routes
const user = require("./routes/user")
const profile  = require("./routes/profile")
const post = require("./routes/posts")
const connection = require("./routes/connection")
const comment = require("./routes/comment")
const payment = require("./routes/payment")
const plans  =  require("./routes/plan")
const feed  = require("./routes/feed")
const page  = require("./routes/page")
const data  = require("./routes/data")
const advertisement  = require("./routes/advertisement") 
const hashtag = require('./routes/hashtag')
const helmet  = require('helmet')
const xss  = require('xss-clean')
//imorting the middleware functions
const errorhandler = require('./middleware/error')

// setting the exprtess app 
const app = express() 

//enabling cors service
app.use(cors())

//setting the view engine handlebars
app.set('view engine','handlebars')

//to enable file-uplodingprocess 
// app.use()

//setting the request body parser 
app.use(express.json())

//setting the cookie parser
app.use(cookieParser())

//setting the protect headers 
app.use(helmet())

//to prevent xss injection 
app.use(xss());

//using the static resourse
app.use('/api/v1/data',express.static(path.resolve('resourse')))
app.use('/',(req,res,next)=>{
    console.log(req);
    next()
})
app
//setting the routes for the app 
app.use('/api/v1/user',user)
app.use('/api/v1/profile',profile)
app.use('/api/v1/post',post)
app.use('/api/v1/connection',connection)
app.use('/api/v1/post/comment',comment)
app.use('/api/v1/feed',feed)
app.use('/api/v1/payment',payment)
app.use('/api/v1/plan',plans)
app.use('/api/v1/data',data)
app.use('/api/v1/page',page)
app.use('/api/v1/advertisement',advertisement)
app.use('/api/v1/hashtag',hashtag)

//mounting the errorhandling middleware
app.use(errorhandler)

//setting the post for app 
app.listen(process.env.PORT_NO,()=>{
    console.log(`the server is running at ${process.env.PORT_NO}`)
})
// exporting the server

