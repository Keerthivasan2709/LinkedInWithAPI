// creating the router object for the user 
const routes = require("express").Router() 
const user  = require("../controller/user/user")

//adding user routes 

routes.route('/register').post(user.register);
routes.route('/verify').post(user.verifyRegistration)
routes.route('/forgotpassword').post(user.forgotPass);
routes.route('/resetpassword/:passcode').post(user.resetPassword)
routes.route('/').post(user.login);
// exporting the router object 
module.exports = routes