// mounting the routes for data 
const routes = require('express').Router() 
const data = require('../controller/data/data')

//mounting the routes 
routes.route('/').get(data.listdata)


//exporting the routes 
module.exports = routes