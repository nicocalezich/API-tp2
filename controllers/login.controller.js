const loginService = require('../services/login.service')

const login = async (req, res) => {
    try{
        const username = req.body.username
        const password = req.body.password
        const token = await loginService.login({username, password})
        res.header('auth-token', token).json({
            error: null,
            data: {token}
        })
    }
    catch (error){
        res.status(400).send(error.message)
    }
}

module.exports = { login }