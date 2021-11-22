const customerRepository = require('../data/customers.data')
const customerFactory = require('../factories/customers.factory')
const validateCustomers = require('../validations/customer.validations')
const jwt = require('jsonwebtoken')

module.exports = {
  createCustomer: async (customer) => {

    const validation = validateCustomers.validateCustomers(customer)
    const existingCustomer = await customerRepository.findByDni(validation.value.dni)    

    if (validation.error || existingCustomer) {
      const message = validation.error ? validation.error.details[0].message : `Customer ${existingCustomer.dni} already exists`
      const status = 400
      throw ({ message, status })
    }

    const newCustomer = customerFactory.create(validation.value)
    const createdCustomer = customerRepository.insertCustomer(newCustomer)
    return { message: `Customer ${createdCustomer.dni} created`, status: 201 };

  },

  getCustomer: async (dni) => {
    const customer = await customerRepository.findByDni(dni)
    if (!customer) {
      const message = `Customer ${dni} not found`
      const status = 404
      throw ({ message, status })
    }
    return customer
  }

}