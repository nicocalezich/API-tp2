const userService = require('../services/users.service')

const createUser = async (req, res) => {
    const result = await userService.createUser(req.body)
    res.send(result)
}

module.exports = { createUser }