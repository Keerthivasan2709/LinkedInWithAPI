// routes for profile 

const routes = require("express").Router()
const profile = require("../controller/profile")
const {protect}  =require("../middleware/auth")

// mounting the routes 
routes.route("/").get(protect,profile.getProfile);
routes.route("/edit").post(protect,profile.editProfile); 


//exporting the routes 
module.exports = routes
