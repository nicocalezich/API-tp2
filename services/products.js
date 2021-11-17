const productRepository = require('../data/products')

module.exports = {
    productService: (product) => {
      const newProduct = ProductFactory.create(product);
      return productRepository.insertProduct(newProduct)
    }
  }