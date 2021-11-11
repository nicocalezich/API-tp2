const userRepository = require('../data/users')

module.exports = {
    createUser: (user) => {
      return userRepository.createUser(user)
    }
  }