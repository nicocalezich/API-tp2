const userRepository = require('../data/users.data')

module.exports = {
    createUser: (user) => {
      return userRepository.createUser(user)
    },

    findByDni: (dni) => {
      return userRepository.findByDni(dni)
    }

  }