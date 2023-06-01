const TasksModel = require('../models/Task')

const getAll = async (_, res) => {
  const tasks = await TasksModel.getAll()
  return res.status(200).json({ tasks })
}

const createTask = async (req, res) => {
  const createdTask = await TasksModel.createTask(req.body)
  return res.status(201).json(createdTask)
}

const deleteTask = async (req, res) => {
  const { id } = req.params
  await TasksModel.deleteTask(id)

  return res.status(204).json()
}



const updateTask = async (req, res) => {
  const { id } = req.params

  await TasksModel.updateTask(id, req.body)

  return res.status(204).json()
}


module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask
}