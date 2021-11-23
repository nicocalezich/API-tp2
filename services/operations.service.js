const operationsRepository = require('../data/operations.data')
const salesFactory = require('../factories/sale.factory')
const productService = require('../services/products.services')
const operationsValidations = require('../validations/operations.validations')
const customerFactory = require('../factories/customers.factory')
const settingsServices = require('../services/settings.services')

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
  const customer = await getCustomer(sale.buyer)
  if(customer){
    const discount = await settingsServices.getDiscount()
    let toDiscount = (discount[0].discount * validatedSale.value.total) / 100
    validatedSale.value.total -= toDiscount
  }
  const newSale = salesFactory.create(validatedSale.value)
  await operationsRepository.insertNewSale(newSale)
  return {ticket: saleInfo.ticket, total: validatedSale.value.total}
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
    ticket.push({ item: product.name, price: product.price, qty, productTotalCost })
  }
  return { total, ticket }
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

const createCustomer = async (customer) => {
  const validation = operationsValidations.validateCustomers(customer)
  const existingCustomer = await operationsRepository.findByDni(validation.value.dni)

  if (validation.error || existingCustomer) {
    const message = validation.error ? validation.error.details[0].message : `Customer ${existingCustomer.dni} already exists`
    const status = 400
    throw ({ message, status })
  }

  const newCustomer = customerFactory.create(validation.value)
  await operationsRepository.insertCustomer(newCustomer)
  return { message: `Customer with dni ${validation.value.dni} created`, status: 201 };
}

const getCustomer = async (dni) => {
  const customer = await operationsRepository.findByDni(dni)
  return customer
}

module.exports = { newSale, createCustomer, getCustomer }

