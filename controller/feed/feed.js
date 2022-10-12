// import all feed controller 

const {resentActivity} = require('./recent')
const {feedProfile} = require('./feedprofile')
const {searchForContent} = require("./search")
const {getNews} = require('./feednews')
const {getRandomAds} = require('./feedAds')


//controller object
const obj = {
    resentActivity,
    feedProfile,
    searchForContent,
    getNews,
    getRandomAds

}

//freezing the object 
Object.freeze(obj)

//exporting the controller module 
module.exports = obj 

