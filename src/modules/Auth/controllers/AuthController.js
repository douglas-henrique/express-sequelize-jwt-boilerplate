const bcrypt = require('bcrypt')
const { User } = require('../../../../models')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const generateToken = (params = {}) => jwt.sign(params, process.env.JWT_HASH, { expiresIn: 86400 })

const auth = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ where: { email } })

  bcrypt.compare(password, user.password, function (err, result) {
    if (result) {
      const token = generateToken({ id: user.id })
      return res.status(200).json({ message: 'User logged in', token })
    }

    if (err) {
      return res.status(500).json({ message: 'Auth Error' })
    }
    return res.status(401).json({ message: 'User not found' })
  })
}

const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body

  bcrypt.hash(password, 10).then((async function (hash) {
    const createdUser = await User.create({
      firstName, lastName, email, password: hash
    })

    if (!createdUser.id) {
      return res.status(500).json({ message: 'Error on create user' })
    }

    const token = generateToken({ id: createdUser.id })
    return res.status(201).json({ message: 'User Created', userId: createdUser.id, token })
  }))
}

module.exports = {
  auth,
  createUser
}