const userRepository = require('../data/users')

module.exports = {
  createUser: (user) => {
      return userRepository.createUser(user)
    },

    getUser: (dni) => {
      return userRepository.getUser(dni)
    }

  }