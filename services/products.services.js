const productRepository = require('../data/products.data')
const ProductFactory = require('../factories/products.factory')
const validateProducts = require('../validations/product.validations')

module.exports = {

  getProduct: async (id) => {
    id = validateProducts.validateId(id)
    const productExist = await productRepository.findByID(newid)

    if (!productExist){
      const message = `Product ${id} not found`
      const status = 404
      throw({message, status})
    }

    return productExist
  },

  insertProduct: async (product) => {
    const validation = validateProducts.validateProduct(product)

    if(validation.error){
      const message = validation.error.details[0].message
      const status = 400
      throw({message, status})
    }

    const newProduct = ProductFactory.create(validation.value)
    return productRepository.insertProduct(newProduct)
  },

  updateProduct: async(id, product) =>{
    id = validateProducts.validateId(id)
    const validation = validateProducts.validateProduct(product)
    const productExist = await productRepository.findByID(id)

    if (validation.error || !productExist){
      const message = validation.error? validation.error.details[0].message : `Product with ID ${id} not found`
      const status = 404
      throw({message, status})
    }

    const result = await productRepository.updateProduct(id, product)
    return {message: result, status: 200};
  },

  deleteProduct: async(id) =>{
    id = validateProducts.validateId(id)
    const productExist = await productRepository.findByID(id)

    if (!productExist){
      const message = `Product ${id} not found`
      const status = 404
      throw({message, status})
    }

    const result = await productRepository.deleteProduct(id)
    return {message: result, status: 200};
  },

  getAllProducts: async() =>{
    const result = await productRepository.getAllProducts()
    return result
  },




}
  