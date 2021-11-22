const userService = require('../services/users.services')

const createUser = async (req, res) => {
    try{
        const result = await userService.createUser(req.body)
        res.status(result.status).send(result.message)
    }
    catch (error){
        res.send(error.message).status(error.status)
    }
}

const getUser = async (req, res) => {
    try{
        const result = await userService.getUser(req.params.dni)
        res.status(200).send(result)
    }
    catch (error){
        res.status(400).send(error.message)
    }
}

const login = async (req, res) => {
    try{
        //validar credenciales
        const isAdmin = true
        const username = req.body.username
        const password = req.body.password
        const token = await userService.login({username, password, isAdmin})
        res.header('auth-token', token).json({
            error: null,
            data: {token}
        })
    }
    catch (error){
        res.status(400).send(error.message)
    }
}



module.exports = { createUser, getUser, login}