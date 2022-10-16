// creatinf the controller for comment 

const {setReply,getReply,deleteReply,updateReply}  = require('./reply')
const {likeComment,getLike,likeReplay} = require('./like')
const {updateComment,deleteComment,setComment,getComments} = require('./comment')
const object = {

    setComment,
    getComments,
    deleteComment,
    updateComment,
    likeComment,
    getLike,
    setReply,
    getReply,
    deleteReply,
    updateReply,
    likeReplay

}
//freezing the objects for the security 
Object.freeze(object)

//exporting the controller object
module.exports = object