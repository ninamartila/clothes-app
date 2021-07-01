const router = require('express').Router()
const User = require('../controller/controllerUser')

router.get('/login', User.login)
router.post('/login', User.loginPost)
router.get('/signUp', User.signUpCustomer)
router.post('/signUp', User.signUpCustomerPost)


module.exports = router