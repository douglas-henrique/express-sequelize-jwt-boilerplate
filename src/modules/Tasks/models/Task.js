const { DataTypes } = require('sequelize')
const { sequelize } = require('../../../shared/connection')

const Task = sequelize.define('task', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  created_at: {
    type: DataTypes.STRING,
    allowNull: false
  }

}, {
  timestamps: false
})

const getAll = async () => {
  const tasks = await Task.findAll()
  return tasks
}

const createTask = async (task) => {
  const { title } = task
  const dateUtc = new Date(Date.now()).toUTCString()
  const newTask = await Task.create({ title, created_at: dateUtc, status: 'pendente' })
  return { insertId: newTask.id }
}

const deleteTask = async (id) => {
  const removedTask = await Task.destroy({
    where: {
      id
    }
  })

  return removedTask
}

const updateTask = async (id, task) => {
  const { title, status } = task
  const updatedTask = await Task.update({ title, status }, { where: { id }})

  return updatedTask
}

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask
}