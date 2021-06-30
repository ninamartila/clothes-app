const ControllerUser = require('../controller/controllerUser')
const router = require('express').Router()

router.get('/', ControllerUser.getUser)
router.get('/users/keranjangs/:id', ControllerUser.getKeranjang)
// router.get('/add', ControllerCast.addUserGet)
// router.post('/add', ControllerCast.addUserPost)
// router.get('/edit/:id', ControllerCast.editUserGet)
// router.post('/edit/:id', ControllerCast.editUserPost)
// router.get('/delete/:id', ControllerCast.deleteUser)

module.exports = router