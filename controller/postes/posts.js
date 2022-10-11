// creating the user controller object with controller method
const {createPost} = require('./createpost')
const {getMyPosts} = require("./getmyposts")
const {like}   = require("./likeposts")
const {getPosts}  = require("./getposts")
const {deletePost} = require("./deletePost")
const {editPost} = require("./editPost")

const object  = {
   
    getMyPosts,
    getPosts,
    like,
    createPost,
    deletePost,
    editPost
    
} 

//freezing the object for securing the function  
Object.freeze(object)

// exporting the user controller object 
module.exports = object 


