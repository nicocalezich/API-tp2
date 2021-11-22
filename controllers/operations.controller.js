const operationsService = require('../services/operations.service')

const newSale = async (req, res) => {
    try{
        const result = await operationsService.newSale(req.body)
        res.status(200).send(result)
    }
    catch (error){
        res.status(400).send(error)
    }
}

module.exports = { newSale }