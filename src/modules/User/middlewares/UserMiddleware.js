const validateBody = (req, res, next) => {
  const { body } = req
  if (body.firstName === undefined) {
    return res.status(400).json({ message: 'The field firstName is required'})
  }

  if (body.firstName === ''){
    return res.status(400).json({ message: 'FirstName cannot be empty' })
  }

  if (body.lastName === undefined) {
    return res.status(400).json({ message: 'The field lastName is required'})
  }

  if (body.lastName === ''){
    return res.status(400).json({ message: 'LastName cannot be empty' })
  }

  if (body.email === undefined) {
    return res.status(400).json({ message: 'The field email is required'})
  }

  if (body.email === ''){
    return res.status(400).json({ message: 'Email cannot be empty' })
  }

  if (body.password === undefined) {
    return res.status(400).json({ message: 'The field password is required'})
  }

  if (body.password === ''){
    return res.status(400).json({ message: 'Password cannot be empty' })
  }

  if (body.password && body.password.length < 8) {
    return res.status(400).json({ message: 'Type a password with minimum 8 caracters' })
  }
  
  next()
}

module.exports = {
  validateBody
}