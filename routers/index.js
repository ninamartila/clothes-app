const express = require('express')
const router = require('express').Router()
const Admin = require('./routerAdmin')
const Customer = require('./routerCustomer')
const User = require('./routerUser')

router.use('/admins', Admin)
router.use('/customers', Customer)
router.use('/users', User)
module.exports = router