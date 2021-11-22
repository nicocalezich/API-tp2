const Customer = require('../models/customer.model')

module.exports = 
{
    create: (customer) =>{
        return new Customer(customer.name, customer.dni, customer.email);
    }
}