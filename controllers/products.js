const productService = require('../services/product.service')


const insertProduct = async (req, res) => {
    try {
        const result = await productService.insertProduct(req.body);
        res.send(result);    
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = { insertProduct }