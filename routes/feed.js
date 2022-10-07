const routes = require('express').Router()
const {protect} = require('../middleware/auth')
const feed = require('../controller/feed/feed')

//mounting the routes 
routes.route('/profile').get(protect,feed.feedProfile)
routes.route('/resent').get(protect,feed.resentActivity)
routes.route('/search').get(protect,feed.searchForContent)

//exporting the route module 
module.exports = routes

