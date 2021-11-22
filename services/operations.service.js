const operationsRepository = require('../data/operations.data')
const salesFactory = require('../factories/sale.factory')
const productService = require('../services/products.services')

const newSale = async (sale) => {
  sale.total = await calculateTotal(sale.products)
  sale.date = new Date()
  const newSale = salesFactory.create(sale)
  const result = await operationsRepository.insertNewSale(newSale)
  return result
}

const calculateTotal = async (products) => {
  let total = 0
  for (let i = 0; i < products.length; i++) {
    let product = await productService.getProduct(products[i].id)
    if (!product) {
      throw new Error
    }
    total += (product.price * products[i].qty)
  }
  return total
}

module.exports = { newSale }

