const operationsRepository = require('../data/operations.data')
const salesFactory = require('../factories/sale.factory')
const productService = require('../services/products.services')


    const newSale = async (sale) => {
        sale.total = calculateTotal(sale.products)
        sale.date = new Date()
        const newSale = salesFactory.create(sale)
        const result = await operationsRepository.insertNewSale(newSale)
        return result
  }
// resolver suma de total async await
  const calculateTotal =  (products) => {
      let total = 0
      products.forEach( (item) => {
        productService.getProduct(item.id)
        .then((product) => {
            total += (product.price * item.qty)
            console.log(total)
        })
      })
     
      
  }

module.exports = { newSale }

