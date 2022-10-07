// import all feed controller 

const {resentActivity} = require('./recent')
const {feedProfile} = require('./feedprofile')
const {searchForContent} = require("./search")



//cntroller object
const obj = {
    resentActivity,
    feedProfile,
    searchForContent

}

//freezing the object 
Object.freeze(obj)

//exporting the controller module 
module.exports = obj 

