const productService = require('../services/products.services')


const insertProduct = async (req, res) => {
    try {
        const result = await productService.insertProduct(req.body);
        res.send(result);    
    } catch (error) {
        res.send(error);
    }       
}
const getProduct = async (req, res) => {
    try{
        const result = await productService.getProduct(req.params.id)
        res.status(200).send(result)
    }
    catch (error){
        res.status(400).send(error.message)
    }
}

const getProductStock = async (req, res) => {
    try{
        const result = await productService.getProductStock(req.params.id)
        res.status(200).send(result)
    }
    catch (error){
        res.status(400).send(error.message)
    }
}
const addStock = async (req, res) => {
    try{
        const result = await productService.addStock(req.params.id, req.params.newStock)
        res.status(200).send(result)
    }
    catch (error){
        res.status(400).send(error.message)
    }
}

module.exports = { insertProduct, getProduct, getProductStock, addStock }