const productRepository = require('../data/products')

module.exports = {
    productService: (product) => {
      return productRepository.insertProduct(product)
    }
  }