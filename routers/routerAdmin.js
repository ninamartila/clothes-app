const ControllerAdmin = require('../controller/controllerAdmin')
const router = require('express').Router()

router.get('/produks', ControllerAdmin.getProduk)
router.get('/produks/add', ControllerAdmin.getAddProduk)
router.post('/produks/add', ControllerAdmin.postAddProduk)
router.get('/produks/edit/:id', ControllerAdmin.getEditProduk)
router.post('/produks/edit/:id', ControllerAdmin.postEditProduk)

module.exports = router