const routes = require('express').Router()
const {protect} = require('../middleware/auth')
const feed = require('../controller/feed/feed')


//mounting the routes 
routes.route('/profile').get(protect,feed.feedProfile)
routes.route('/recent').get(protect,feed.resentActivity)
routes.route('/search/:keyword').get(protect,feed.searchForContent)
routes.route('/ads').get(protect,feed.getRandomAds)
routes.route('/news').get(protect,feed.getNews)
routes.route('/notification').get(protect,feed.getNotification)
//exporting the route module 
module.exports = routes

