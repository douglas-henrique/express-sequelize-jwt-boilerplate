const express = require('express')
const TasksControllers = require('./modules/Tasks/controllers/TasksController')
const TasksMiddleware = require('./modules/Tasks/middlewares/TasksMiddleware')
const router = express.Router()

router.get('/tasks', TasksControllers.getAll)
router.post('/tasks', TasksMiddleware.validateBody, TasksControllers.createTask)
router.delete('/tasks/:id', TasksControllers.deleteTask)
router.put('/tasks/:id', TasksControllers.updateTask)


module.exports = router