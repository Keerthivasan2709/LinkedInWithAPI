// creating the routes for the connection  
const routes = require('express').Router()
const {protect} = require("../middleware/auth")
const connection = require("../controller/connection/connection")


//creating the routes for connection 

routes.route('/sreq/:receiverid').post(protect,connection.sendRequest)
routes.route('/vreq').get(protect,connection.requestRecieved)
routes.route('/accept/:aid').post(protect,connection.acceptRequest)
routes.route('/view').get(protect,connection.viewConnection)
routes.route('/recommend').get(protect,connection.recommendConnection)
//exporting the routes object 
module.exports = routes 


