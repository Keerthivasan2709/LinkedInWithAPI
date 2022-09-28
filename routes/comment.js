// Route file for comment 
const routes = require('express').Router()
const {protect} = require('../middleware/auth')
const comment = require('../controller/comments');


//mounting the routes to app
routes.route('/:postid').get(protect,comment.getComments).post(protect,comment.setComment);
routes.route('/replay/:cid').post(protect,comment.setReplay).get(protect,comment.getReplay);
routes.route('/update/:cid').patch(protect,comment.updateComment);
routes.route('/like/:cid').get(protect,comment.getLike).post(protect,comment.likeComment);
routes.route('/delete/:cid').delete(protect,comment.deleteComment)
routes.route('/replay/delete/:rid').delete(protect,comment.deleteReplay)
routes.route('/replay/update/:rid').patch(protect,comment.updateReplay)

//exporting the route module
module.exports = routes
