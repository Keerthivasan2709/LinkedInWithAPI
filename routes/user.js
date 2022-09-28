// creating the router object for the user 
const routes = require("express").Router() 
const user  = require("../controller/user")
const {protect} = require("../middleware/auth")
//adding user routes 
routes.route('/').post(user.login);
routes.route('/register').post(user.register);
routes.route('/forgotpass').post(user.forgotPass);
routes.route('/resetpassword/:passcode').post(user.resetPassword)
// exporting the router object 
module.exports = routes