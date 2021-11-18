const productRepository = require('../data/products.data')
const ProductFactory = require('../factories/products.factory')

module.exports = {
    productService: (product) => {
      const newProduct = ProductFactory.create(product);
      console.log(newProduct)
      return productRepository.insertProduct(newProduct)
    }
  }