// creating the user controller object with controller method
const {getMyProfile} =  require('./getMyProfile')
const {editProfile} = require('./editprofile')
const {getProfile} = require('./getProfile')
const {resumeBuilder} = require('./buildResume')
const object  = {
    getMyProfile,
    editProfile,
    getProfile,
    resumeBuilder

} 




Object.freeze(object)


// exporting the user controller object 
module.exports = object 
