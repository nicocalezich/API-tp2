const Joi = require("@hapi/joi")

module.exports = {
    validateUser: (user) => {
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
 
        return schema.validate({username: user.username, password: user.password, dni: user.dni, isAdmin: user.isAdmin})

    } 
} 