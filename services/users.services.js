const userRepository = require('../data/users.data')
const userFactory = require('../factories/users.factory')
const validateUsers = require('../validations/user.validations')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

  const createUser = async (user) => {

    const validation = validateUsers.validateUser(user)

    const existingUser = await userRepository.findByUsername(validation.value.username)

    if (validation.error || existingUser) {
      const message = validation.error ? validation.error.details[0].message : `User ${existingUser.username} already exists`
      const status = 400
      throw ({ message, status })
    }

    const newUser = userFactory.create(validation.value)
    await userRepository.insertUser(newUser)
    return { message: `User ${validation.value.username} created`, status: 201 };

  }

  const getUser = async (username) => {
    const user = await userRepository.findByUsername(username)
    if (!user) {
      const message = `User ${username} not found`
      const status = 404
      throw ({ message, status })
    }
    return user
  }

  const login = async ({ username, password }) => {
    //validar usuario
    const user = await getUser(username)
    if(!user){
      throw({message: `Invalid credentials. Try again`, status: 400})
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      throw({message: `Invalid credentials. Try again`, status: 400})
    }
    const isAdmin = user.isAdmin
    const token = jwt.sign({ username, password, isAdmin }, process.env.TOKEN_SECRET, {expiresIn: '480m'})
    return token
  }

module.exports = { createUser, getUser, login}