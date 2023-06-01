const bcrypt = require('bcrypt')
const { User } = require('../../../../models')

const getUsers = async (_, res) => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  })
  return res.status(200).json({ users })
}

const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body

  bcrypt.hash(password, 10).then((async function (hash) {
    const createdUser = await User.create({
      firstName, lastName, email, password: hash
    })

    if (!createdUser.id) {
      return res.status(500).json({ message: 'Error on create user'})

    }

    return res.status(201).json({ message: 'User Created', userId: createdUser.id })
  }))
}

const deleteUser = async (req, res) => {
  const { id } = req.params
  await User.destroy({
    where: {
      id
    }
  })
  return res.status(204).json()
}

const updateUser = async (req, res) => {
  const { id } = req.params

  await User.update(req.body, {
    where: {
      id
    }
  })

  return res.status(204).json()
}

module.exports = {
  getUsers,
  createUser,
  deleteUser,
  updateUser
}