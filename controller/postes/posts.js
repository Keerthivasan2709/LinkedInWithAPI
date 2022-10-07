// creating the user controller object with controller method
const {createPost} = require('./createpost')
const {getMyPosts} = require("./getmyposts")
const {like}   = require("./likeposts")
const {getPosts}  = require("./getposts")

const object  = {
   
    getMyPosts,
    getPosts,
    like,
    createPost
    
} 

//freezing the object for securing the function  
Object.freeze(object)

// exporting the user controller object 
module.exports = object 


