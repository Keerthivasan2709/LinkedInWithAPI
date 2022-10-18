//routes for hash tag

const routes = require('express').Router() 

const hashtag = require('../controller/hashtag/hashtag')
const { protect } = require('../middleware/auth')

//mounting the routes
routes.route('/posts/:tag').get(protect,hashtag.getHashPosts);



//exporting the routes 
module.exports  =routes

