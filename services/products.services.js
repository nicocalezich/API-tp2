const productRepository = require('../data/products.data')
const ProductFactory = require('../factories/products.factory')
const validateProducts = require('../validations/product.validations')

module.exports = {
  insertProduct: (product) => {
    const validation = validateProducts.validateProduct(product)

    if(validation.error){
      const message = validation.error.details[0].message
      const status = 400
      throw({message, status})
    }

    const newProduct = ProductFactory.create(validation.value);
    return productRepository.insertProduct(newProduct)
    }
  }