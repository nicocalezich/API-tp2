const productService = require('../services/products.services')


const insertProduct = async (req, res) => {
    try {
        console.log("entro al controller")
        const result = await productService.insertProduct(req.body);
        res.send(result);    
    } catch (error) {
        res.send(error);
    }
    
}

module.exports = { insertProduct }