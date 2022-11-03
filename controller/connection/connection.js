// building the connection controller functions 
const {sendRequest} = require('./sendRequest')
const {requestRecieved} = require('./requestRecieved')
const {acceptRequest} = require('./acceptRequest')
const {viewConnection} = require('./viewConnection')
const {recommendConnection} = require("./recommended")
const {ignoreConnection} = require('./ignoreConnection')
const {connectionMenu} = require('./connectionMenu')
const object = {

    sendRequest,
    requestRecieved,
    acceptRequest,
    viewConnection,
    recommendConnection,
    ignoreConnection,
    connectionMenu
}
 
//freezing the oject for security 
Object.freeze(object)

//exporting the controller object 
module.exports = object