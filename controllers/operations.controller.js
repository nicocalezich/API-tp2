const operationsService = require('../services/operations.service')

const newSale = async (req, res) => {
    try{
        const result = await operationsService.newSale(req.body)
        res.status(200).send(result)
    }
    catch (error){
        res.status(400).send(error.message)
    }
}

const createCustomer = async (req, res) => {
    try{
        const result = await operationsService.createCustomer(req.body)
        res.status(result.status).send(result.message)
    }
    catch (error){
        res.send(error.message).status(error.status)
    }
}

const getCustomer = async (req, res) => {
    try{
        const result = await operationsService.getCustomer(req.params.dni)
        res.status(200).send(result)
    }
    catch (error){
        res.status(400).send(error.message)
    }
}

module.exports = { newSale, createCustomer, getCustomer }