//creating the post routes 
const routes = require("express").Router()
const {protect,likeCheck} = require("../middleware/auth")
const post = require('../controller/postes/posts')

//building the routes for the user

routes.route("/create").post(protect,post.createPost)
routes.route("/my").get(protect,post.getMyPosts)
routes.route("/like/:postid").post(protect,post.like)
routes.route("/:postid").delete(protect,post.deletePost).patch(protect,post.editPost)
routes.route("/").get(protect,post.getPosts)
//exporting the route object 
module.exports = routes 