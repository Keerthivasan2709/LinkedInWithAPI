// building the connection controller functions 
const {sendRequest} = require('./sendRequest')
const {requestRecieved} = require('./requestRecieved')
const {acceptRequest} = require('./acceptRequest')
const {viewConnection} = require('./viewConnection')
const {recommendConnection} = require("./recommended")
const object = {

    sendRequest,
    requestRecieved,
    acceptRequest,
    viewConnection,
    recommendConnection
}
 
//freezing the oject for security 
Object.freeze(object)

//exporting the controller object 
module.exports = object