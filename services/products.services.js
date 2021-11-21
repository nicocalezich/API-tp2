const productRepository = require('../data/products.data')
const ProductFactory = require('../factories/products.factory')
const validateProducts = require('../validations/product.validations')

module.exports = {
  insertProduct: async (product) => {
    const validation = validateProducts.validateProduct(product)
    const productExists = await productRepository.findByID(validation.value.id)    

    if(validation.error){
      const message = validation.error.details[0].message
      const status = 400
      throw({message, status})
    }

    if(productExists){
      const message = `Product with ID ${productExists.id} already exists`
      const status = 400
      throw({message, status})
    }

    const newProduct = ProductFactory.create(validation.value)
    return productRepository.insertProduct(newProduct)
    },

    getProduct: async (id) => {
      const product = await productRepository.findByID(id)

      if (!product){
        const message = `Product ${id} not found`
        const status = 404
        throw({message, status})
      }
      return product
    },
    getProductStock: async(id) =>{
      const product = await productRepository.findByID(id)
      if (!product){
        const message = `Product ${id} not found`
        const status = 404
        throw({message, status})
      }
      return {message: product.stock, status: 201};
    },
    addStock: async(id,newStock) =>{
      const product = await productRepository.addStock(id,newStock)
      if (!product){
        const message = `Product ${id} not found`
        const status = 404
        throw({message, status})
      }
      return {message: product, status: 201};
    }
}
  