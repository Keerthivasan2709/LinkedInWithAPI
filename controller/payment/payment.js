//the payment method object 

const {intiatePayment} = require('./initiatePayment')
const {successfullPayment} = require('./successPayment')
const {failurePayment} = require('./unsuccessPayment')

//creating payment controller object

const obj = {
    intiatePayment,
    successfullPayment,
    failurePayment,
}

//freezing the object for security 
Object.freeze(obj)

//exporting the controller object
module.exports = obj
