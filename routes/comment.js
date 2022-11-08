// Route file for comment 
const routes = require('express').Router()
const {protect} = require('../middleware/auth')
const comment = require('../controller/comments/comments');


//mounting the routes to app

routes.route('/reply/:cid').post(protect,comment.setReply).get(protect,comment.getReply);
routes.route('/update/:cid').patch(protect,comment.updateComment);
routes.route('/like/:cid').get(protect,comment.getLike).post(protect,comment.likeComment);
routes.route('/delete/:cid').delete(protect,comment.deleteComment)
routes.route('/reply/delete/:rid').delete(protect,comment.deleteReply)
routes.route('/reply/update/:rid').patch(protect,comment.updateReply)

routes.route('/reply/like/:id').post(protect,comment.likeReplay)
routes.route('/:postid').get(protect,comment.getComments)
routes.route('/').post(protect,comment.setComment);
//exporting the route module
module.exports = routes
