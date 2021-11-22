const userRepository = require('../data/users.data')
const userFactory = require('../factories/users.factory')
const validateUsers = require('../validations/user.validations')
const jwt = require('jsonwebtoken')

module.exports = {
  createUser: async (user) => {

    const validation = validateUsers.validateUser(user)

    const existingUser = await userRepository.findByDni(validation.value.dni)

    if (validation.error || existingUser) {
      const message = validation.error ? validation.error.details[0].message : `User ${existingUser.dni} already exists`
      const status = 400
      throw ({ message, status })
    }

    const newUser = userFactory.create(validation.value)
    const createdUser = userRepository.insertUser(newUser)
    return { message: `User ${createdUser.dni} created`, status: 201 };

  },

  getUser: async (dni) => {
    const user = await userRepository.findByDni(dni)
    if (!user) {
      const message = `User ${dni} not found`
      const status = 404
      throw ({ message, status })
    }
    return user
  },

  login: async ({ username, password, isAdmin }) => {
    const token = jwt.sign({ username, password, isAdmin }, process.env.TOKEN_SECRET, {expiresIn: '10m'})
    return token
  }

}