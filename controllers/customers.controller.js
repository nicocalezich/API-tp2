const customerService = require('../services/customers.service')

const createCustomer = async (req, res) => {
    try{
        const result = await customerService.createCustomer(req.body)
        res.status(result.status).send(result.message)
    }
    catch (error){
        res.send(error.message).status(error.status)
    }
}

const getCustomer = async (req, res) => {
    try{
        const result = await customerService.getCustomer(req.params.dni)
        res.status(200).send(result)
    }
    catch (error){
        res.status(400).send(error.message)
    }
}

module.exports = {createCustomer, getCustomer}