const Product = require('../models/sale.model')

module.exports = 
{
    create: (sale) =>{
        return new Product(sale.products, sale.total, sale.buyer, sale.paymentMethod, sale.date);
    }
}