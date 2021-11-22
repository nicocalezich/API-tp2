const productService = require('../services/products.services')

const getProduct = async (req, res) => {
    try{
        const result = await productService.getProduct(req.params.id)
        res.status(200).send(result)
    }
    catch (error){
        console.log(error)
        res.status(404).send(error.message)
    }
}

const insertProduct = async (req, res) => {
    try {
        const result = await productService.insertProduct(req.body);
        res.send(result);    
    } catch (error) {
        res.send(error.message).status(error.status);
    }       
}

const updateProduct = async (req, res) => {
    try{
        const result = await productService.updateProduct(req.params.id, req.body)
        res.status(200).send(result)
    }
    catch (error){
        res.status(400).send(error.message)
    }
}

const deleteProduct = async (req, res) => {
    try{
        const result = await productService.deleteProduct(req.params.id)
        res.status(200).send(result)
    }
    catch (error){
        res.status(400).send(error.message)
    }
}

const getAllProducts = async (req, res) => {
    try{
        const result = await productService.getAllProducts()
        res.status(200).send(result)
    }
    catch (error){
        res.status(500).send("Couldn't get products")
    }
} 

module.exports = { insertProduct, getProduct, updateProduct, deleteProduct, getAllProducts }