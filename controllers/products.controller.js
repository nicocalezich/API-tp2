const userService = require('../services/product.service')

const createUser = async (req, res) => {
    const result = await userService.createUser(req.body)
    res.send(result)
}

module.exports = { createUser }