const express = require('express')
const routes = express.Router()
const authMiddleware = require('../app/middlewares/auth')

const SessionController = require('../app/controllers/SessionController')

routes.post('/session', SessionController.sign)

routes.use(authMiddleware)

routes.get('/dashboard', SessionController.test)

module.exports = routes
