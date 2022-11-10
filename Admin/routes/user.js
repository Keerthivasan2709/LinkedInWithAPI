const router  = require('express').Router() 
const {adminLogin}= require('../controller/user')

router.route('/login').post(adminLogin);






module.exports = router