const userRepository = require('../data/users.data')
const userFactory = require('../factories/users.factory')
// const Joi = require("@hapi/joi")
const validateUsers = require('../validations/user.validations')

module.exports = {
  createUser: (user) => {

      const validation = validateUsers.validateUser(user)

      if(!validation.error){
        const newUser = userFactory.create(validation.value)
        return userRepository.createUser(newUser)
      }
      
      const message = validation.error.details[0].message
      const status = 400
      throw({message, status})
      
    },

    getUser: (dni) => {
      return userRepository.getUser(dni)
    }

  }