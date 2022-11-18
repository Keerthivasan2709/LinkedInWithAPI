const routes  = require('express').Router()
const {getAdvertisment} = require('../controller/advertisment')
routes.route('/').get(getAdvertisment)


// exporting the modules 
module.exports = routes