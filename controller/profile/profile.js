// creating the user controller object with controller method
const {getMyProfile} =  require('./getMyProfile')
const {editProfile} = require('./editprofile')
const {getProfile} = require('./getProfile')
const {resumeBuilder} = require('./buildResume')
const {followPeople} = require('./followPeople')
const {updateUserEducation} = require('./updateEducation')
const {updateUserCompany} = require('./updateUserCompany')
const {viwedProfile} = require('./getViwedProfile')
const {getFollowers} = require('./getFollowers')

const object  = {
    getMyProfile,
    editProfile,
    getProfile,
    resumeBuilder,
    followPeople,
    updateUserCompany,
    updateUserEducation,
    viwedProfile,
    getFollowers

} 




Object.freeze(object)


// exporting the user controller object 
module.exports = object 
