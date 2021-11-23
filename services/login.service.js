const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const userService = require('../services/users.services')

const login = async ({ username, password }) => {
    const errorMessage = `Invalid credentials. Try again`
    const user = await userService.getUser(username)
    if (!user) {
        throw ({ message: errorMessage, status: 400 })
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw ({ message: errorMessage, status: 400 })
    }
    const isAdmin = user.isAdmin
    const token = jwt.sign({ username, password, isAdmin }, process.env.TOKEN_SECRET, { expiresIn: '480m' })
    return token
}

module.exports = { login }