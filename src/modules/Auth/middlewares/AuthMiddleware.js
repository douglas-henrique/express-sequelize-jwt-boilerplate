const jwt = require('jsonwebtoken')
require('dotenv').config()

const validateBody = (req, res, next) => {
  const { body } = req

  if (body.email === undefined) {
    return res.status(400).json({ message: 'The field email is required' })
  }

  if (body.email === '') {
    return res.status(400).json({ message: 'Email cannot be empty' })
  }

  if (body.password === undefined) {
    return res.status(400).json({ message: 'The field password is required' })
  }

  if (body.password === '') {
    return res.status(400).json({ message: 'Password cannot be empty' })
  }

  if (body.password && body.password.length < 8) {
    return res.status(400).json({ message: 'Type a password with minimum 8 caracters' })
  }

  next()
}

const validateAuth = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).send({ error: 'No token provided' })
  }

  const parts = authHeader.split(' ')

  if (!parts.length === 2) {
    return res.status(401).send({ error: 'Token Error' })
  }

  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: 'Token format error' })
  }

  jwt.verify(token, process.env.JWT_HASH, (err, decoded) => {
    if (err) {
      return res.status(401).send({ error: 'Invalid token' })
    }

    req.userId = decoded.id

    return next()
  })
}

module.exports = {
  validateBody,
  validateAuth
}