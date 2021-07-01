const ControllerCustomer = require('../controller/ControllerCustomer')
const router = require('express').Router()

router.get('/', ControllerCustomer.getCustomer)

module.exports = router