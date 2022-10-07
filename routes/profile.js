// routes for profile 

const routes = require("express").Router()
const profile = require("../controller/profile/profile")
const {protect}  =require("../middleware/auth");


// mounting the routes 

routes.route("/edit").post(protect,profile.editProfile); 
routes.route("/my").get(protect,profile.getMyProfile);
routes.route('/resume').get(protect,profile.resumeBuilder);
routes.route('/:profileid').get(protect,profile.getProfile);
//exporting the routes 
module.exports = routes
