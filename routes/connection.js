// creating the routes for the connection  
const routes = require('express').Router()
const {protect} = require("../middleware/auth")
const connection = require("../controller/connection/connection")


//creating the routes for connection 

routes.route('/sreq').post(protect,connection.sendRequest)
routes.route('/vreq').get(protect,connection.requestRecieved)
routes.route('/accept').post(protect,connection.acceptRequest)
routes.route('/view').get(protect,connection.viewConnection)
routes.route('/recommend').get(protect,connection.recommendConnection)
routes.route('/ignore').post(protect,connection.ignoreConnection)
routes.route('/menu').get(protect,connection.connectionMenu)
//exporting the routes object 
module.exports = routes 


