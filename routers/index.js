const express = require('express')
const router = require('express').Router()
const Controller = require('../controller/controller')
const Produk = require('./routerProduk')
const User = require('./routerUser')
const Oreder = require('./routerOrder')

// router.get('/', Controller.login)
router.use('/produks', Produk)
router.use('/users', User)
router.use('/orders', Oreder)

module.exports = router