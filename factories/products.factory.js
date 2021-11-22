const Product = require('../models/product.model')

module.exports = 
{
    create: (product) =>{
        return new Product(product.name, product.stock, product.type, product.price);
    }
}