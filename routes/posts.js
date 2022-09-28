//creating the post routes 
const routes = require("express").Router()
const {protect,likeCheck} = require("../middleware/auth")
const post = require("../controller/posts")

//building the routes for the user
routes.route("/").get(protect,post.getPosts)
routes.route("/create").post(protect,post.creatPost)
routes.route("/my").get(protect,post.getMyPosts)
routes.route("/like/:postid").post(protect,post.like)
//exporting the route object 
module.exports = routes 