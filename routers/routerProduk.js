const ControllerProduk = require('../controller/controllerProduk')
const router = require('express').Router()

router.get('/', ControllerProduk.getProduck)
// router.get('/add', ControllerCast.addProdukGet)
// router.post('/add', ControllerCast.addProdukPost)
// router.get('/edit/:id', ControllerCast.editProdukGet)
// router.post('/edit/:id', ControllerCast.editProdukPost)
// router.get('/delete/:id', ControllerCast.deleteProduk)

module.exports = router