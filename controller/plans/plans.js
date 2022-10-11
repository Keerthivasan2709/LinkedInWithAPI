// to export all the controller function 
const {addPlan} = require('./addPlan')
const {getPlans} = require('./getPlans')
const {deletePlan} = require("./removePlan")
const {updatePlan} = require('./updatePlan')


//controller object
const obj  = {
    addPlan,
    getPlans,
    updatePlan,
    deletePlan,
}

//freeze the object for the security 
Object.freeze(obj)

//exporting the module 
module.exports = obj 
