const express = require('express')
const ComputerController = require('./controller/Computer')

const routes = express.Router()


routes.post('/compute', ComputerController.store)
routes.get('/requests', ComputerController.display)

module.exports = routes
