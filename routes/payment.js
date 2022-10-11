// routes for the payment 

const { protect } = require('../middleware/auth')

const routes  = require('express').Router() 

//importing the payment object
const payment = require('../controller/payment/payment')

routes.route('/failure').get(payment.failurePayment)
routes.route('/success').get(payment.successfullPayment)
routes.route('/').post(protect,payment.intiatePayment)

//exporting the router object
module.exports = routes
