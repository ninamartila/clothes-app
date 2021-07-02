const ControllerCustomer = require('../controller/ControllerCustomer')
const router = require('express').Router()

router.get('/produks/:idCustomer', ControllerCustomer.getProdukCustomer)
router.get('/keranjang/:idCustomer/:id', ControllerCustomer.getOrderCustomer)
router.get('/keranjang/detele/:idCustomer/:id', ControllerCustomer.getDeleteCustomer)

module.exports = router