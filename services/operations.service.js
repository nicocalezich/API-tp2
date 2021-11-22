const operationsRepository = require('../data/operations.data')
const salesFactory = require('../factories/sale.factory')
const productService = require('../services/products.services')
const operationsValidations = require('../validations/operations.validations')

const newSale = async (sale) => {
  const saleInfo = await getSaleInfo(sale.products)
  sale.total = saleInfo.total
  sale.date = new Date()
  const validatedSale = operationsValidations.validateSale(sale)

  if (validatedSale.error) {
    const message = validatedSale.error.details[0].message
    const status = 400
    throw ({ message, status })
  }
  await subtractStock(sale.products)
  const newSale = salesFactory.create(validatedSale.value)
  const result = await operationsRepository.insertNewSale(newSale)
  return saleInfo.ticket
}

const getSaleInfo = async (products) => {
  let total = 0
  let ticket = []
  for (let i = 0; i < products.length; i++) {
    let id = products[i].id
    let qty = products[i].qty
    let product = await productService.getProduct(id)
    if (!product) throw new Error
    let productTotalCost = product.price * qty
    total += productTotalCost
    ticket.push({item: product.name, price: product.price, qty, productTotalCost})
  }
  return {total, ticket}
}

const subtractStock = async (products) => {
  for (let i = 0; i < products.length; i++) {
    let id = products[i].id
    let qty = products[i].qty
    let product = await productService.getProduct(id)
    if (!product) throw new Error
    if (qty > product.stock) {
      throw ({ message: "Qty is grater than available stock", status: 400 })
    }
    product.stock -= qty
    await productService.updateProduct(id, product)
  }
}

module.exports = { newSale }

