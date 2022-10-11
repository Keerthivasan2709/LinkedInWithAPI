//routes for plan 

const { required } = require("joi")

//!---imp-- need to build a authentication middleware for verifying the admin  

const routes  = require("express").Router()

//importin the plan controller object
const plans  = require('../controller/plans/plans')
const { protect } = require("../middleware/auth")


//mounting the routes 
routes.route('/')
                .post(protect,plans.addPlan)
                .get(protect,plans.getPlans)
                .patch(protect,plans.updatePlan)
                .delete(protect,plans.deletePlan);

//exporting the router object
module.exports = routes                