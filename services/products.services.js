const productRepository = require('../data/products.data')
const ProductFactory = require('../factories/products.factory')

module.exports = {
  insertProduct: (product) => {
      const newProduct = ProductFactory.create(product);
      return productRepository.insertProduct(newProduct)
    }
  }