const ControllerAdmin = require('../controller/controllerAdmin')
const router = require('express').Router()

router.get('/produks', ControllerAdmin.getProdukAdmin)
router.get('/produks/add', ControllerAdmin.getAddProdukAdmin)
router.post('/produks/add', ControllerAdmin.postAddProdukAdmin)
router.get('/produks/edit/:id', ControllerAdmin.getEditProdukAdmin)
router.post('/produks/edit/:id', ControllerAdmin.postEditProdukAdmin)
router.get('/produks/delete/:id', ControllerAdmin.getDeleteProdukAdmin)

module.exports = router