const express = require('express')

const UserController = require('./modules/User/controllers/UserController')
const UserMiddleware = require('./modules/User/middlewares/UserMiddleware')
const AuthController = require('./modules/Auth/controllers/AuthController')
const AuthMiddleware = require('./modules/Auth/middlewares/AuthMiddleware')

const router = express.Router()

//public routes
router.post('/register', UserMiddleware.validateBody, AuthController.createUser)
router.post('/auth', AuthMiddleware.validateBody, AuthController.auth)

//auth routes
router.use('/users', AuthMiddleware.validateAuth)
router.get('/users', UserController.getUsers)
router.delete('/users/:id', UserController.deleteUser)
router.put('/users/:id', UserController.updateUser)

module.exports = router