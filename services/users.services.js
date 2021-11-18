const userRepository = require('../data/users.data')
const userFactory = require('../factories/users.factory')
const Joi = require("@hapi/joi")

module.exports = {
  createUser: (user) => {
      const schema = Joi.object({
        username: Joi.string()
                  .min(5)
                  .max(15)
                  .required(),

        password: Joi.string()
                  .alphanum()
                  .min(8)
                  .max(30)
                  .required(),

        dni: Joi.number()
                .required(),

        isAdmin: Joi.bool()
                .required()
      })

      const {error, value} = schema.validate({username: user.username, password: user.password, dni: user.dni, isAdmin: user.isAdmin})

      if(!error){
        const createdUser = userFactory.create(value)
        return {message: createdUser, status: 201}
      }
      else{
        const message = error.details[0].message
        const status = 400
        throw({message, status})
      }
    },

    getUser: (dni) => {
      return userRepository.getUser(dni)
    }

  }