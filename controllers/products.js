const productService = require('../services/product.service')

const insertProduct = async (req, res) => {
    const result = await productService.insertProduct(req.body)
    res.send(result)
}

module.exports = { insertProduct }