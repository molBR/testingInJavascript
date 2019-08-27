const express = require('express')

const soma = require('./app/services/soma')
const routes = express.Router()

//  soma
routes.post('/soma', soma.div)

module.exports = routes
