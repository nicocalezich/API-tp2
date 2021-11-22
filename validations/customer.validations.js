const Joi = require("@hapi/joi")

module.exports = {
    validateCustomers: (customer) => {
        const schema = Joi.object({
          name: Joi.string()
                    .min(5)
                    .max(25)
                    .required(),
  
          dni: Joi.number()                    
                    .required(),
  
          email: Joi.string()
                    .min(8)
                  .required()
  
        })
 
        return schema.validate({name: customer.name, dni: customer.dni, email: customer.email})

    } 
} 