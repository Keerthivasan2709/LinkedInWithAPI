// to export the hashtag 
const {getHashPosts} = require('./getHashtagpost')
const obj = {
    getHashPosts,
}

//freezing the object 
Object.freeze(obj)

//exporting the module 
module.exports = obj 
