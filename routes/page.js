//mounting the routes for page 
const routes = require('express').Router()
const {protect} = require('../middleware/auth')
const {pageAuthentication} = require('../middleware/pageAuth')
const page  = require('../controller/page/page')
const upload  = require('../utils/multer')


//mounting the routes 
routes.route('/assignrole').post(protect,pageAuthentication,page.assignPageRole)
routes.route('/create').post(protect,upload.single('logopic'),page.createPage)
routes.route('/:pageid').get(protect,page.viewPage)
routes.route('/post').post(protect,pageAuthentication,page.createPagePosts)
routes.route('/post/edit').post(protect,pageAuthentication,page.pagePostEdit)
routes.route('/follow').post(protect,page.followPage)
routes.route('/unfollow').post(protect,page.unfollowPage)
routes.route('/').get(protect,page.viewMyPage)




//exporting the routes modules 
module.exports  = routes




