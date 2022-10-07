// creating the user controller object with controller method
const {register} = require('./register')
const {verifyRegistration} = require('./verifyregister')
const {forgotPass} = require('./forgotpass')
const {resetPassword} = require('./resetpassword')
const {login} = require('./login')
const object = {
    
     register,
     verifyRegistration,
     forgotPass,
     resetPassword,
     login



};
//freezing the object for security
Object.freeze(object)

// exporting the user controller object
module.exports = object;
