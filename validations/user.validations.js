const Joi = require("@hapi/joi")

module.exports = {
    validateUser: (user) => {
        const schema = Joi.object({
          username: Joi.string()
                    .min(6)
                    .max(10)
                    .required(),
  
          password: Joi.string()
                    .alphanum()
                    .min(8)
                    .max(30)
                    .required(),
  
          isAdmin: Joi.bool()
                  .required()
        })
 
        return schema.validate({username: user.username, password: user.password, isAdmin: user.isAdmin})

    } 
} 