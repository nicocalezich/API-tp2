const Joi = require("@hapi/joi")

module.exports = {
    validateProduct: (product) => {
        const schema = Joi.object({
          id: Joi.number()
                .required(),

          name: Joi.string()
                .min(3)
                .max(25)
                .required(),
  
          stock: Joi.number()
                .min(5)
                .required(),
  
          type: Joi.string()
                .min(3)
                .max(25)
                .required(),
  
          price: Joi.number()
                .min(0)
                .required(),
        })
 
        return schema.validate({id: product.id, name: product.name, stock: product.stock, type: product.type, price: product.price})

    } 
} 