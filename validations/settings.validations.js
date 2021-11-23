const Joi = require("@hapi/joi")

module.exports = {
    validateSettings: (discount) => {
        const schema = Joi.object({
          discount: Joi.number()
                .min(1)
                .max(99)
                .required()          
        }) 
        return schema.validate({discount: discount.discount})
    }   
} 