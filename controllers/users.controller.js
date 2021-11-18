const userService = require('../services/users.services')

const createUser = async (req, res) => {
    try{
        const result = await userService.createUser(req.body)
        res.status(result.status).send(result.message)
    }
    catch (error){
        res.status(400).send(error.message)
    }
}

const getUser = async (req, res) => {
    try{
        const result = await userService.getUser(req.params.dni)
        res.status(result.status).send(result.message)
    }
    catch (error){
        res.status(error.status).send(error.message)
    }
}

module.exports = { createUser, getUser }