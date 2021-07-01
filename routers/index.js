const express = require('express')
const router = require('express').Router()
const Admin = require('./routerAdmin')
const Customer = require('./routerCustomer')

router.use('/admins', Admin)
router.use('/customers', Customer)

module.exports = router