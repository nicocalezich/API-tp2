const userService = require('../services/users.service')

const createUser = async (req, res) => {
    try{
        const result = await userService.createUser(req.body)
        res.send(result)
    }
    catch (error){
        res.status(error.status).send(error.message)
    }
}

module.exports = { createUser }