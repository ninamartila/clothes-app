const ControllerCustomer = require('../controller/ControllerCustomer')
const router = require('express').Router()

router.get('/produks', ControllerCustomer.getProdukCustomer)
router.get('/keranjang/:id', ControllerCustomer.getOrderCustomer)

module.exports = router