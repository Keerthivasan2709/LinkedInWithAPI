// import all controller function  and export it for page 



//importing all the controller function 
const {assignPageRole}  = require('./assignPageRole')
const {createPage} = require('./createPage')
const {viewPage} = require('./getPage')
const {createPagePosts} = require('./pagePost')
const {pagePostEdit} = require('./pagePostEdit')
const {followPage,unfollowPage} = require('./followPage')
//creating a controller object

const obj = {
    assignPageRole,
    createPage,
    viewPage,
    createPagePosts,
    pagePostEdit,
    followPage,
    unfollowPage,
}

// freezing the object for the secutiry 
Object.freeze(obj)

//exporting the controller object
module.exports = obj


