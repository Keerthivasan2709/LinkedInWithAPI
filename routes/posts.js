//creating the post routes 
const routes = require("express").Router()
const {protect} = require("../middleware/auth")
const post = require('../controller/postes/posts')

//building the routes for the user

routes.route("/create").post(protect,post.createPost)
routes.route("/my").get(protect,post.getMyPosts)
routes.route("/like").post(protect,post.like)
routes.route("/:postid").delete(protect,post.deletePost)
routes.route('/recommend').get(protect,post.recommendedPosts)
routes.route("/").get(protect,post.getPosts).patch(protect,post.editPost)
//exporting the route object 
module.exports = routes 