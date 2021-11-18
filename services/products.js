const productRepository = require('../data/products')
const ProductFactory = require('../factories/product.factory')

module.exports = {
    productService: (product) => {
      const newProduct = ProductFactory.create(product);
      console.log(newProduct)
      return productRepository.insertProduct(newProduct)
    }
  }