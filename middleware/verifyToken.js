const jwt = require('jsonwebtoken')
const standarRoutes = ["/hola"]
const verifyToken = (req, res, next) => {
    const route = req.originalUrl
    const token = req.header('auth-token')
    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    try {
        const user = jwt.verify(token, process.env.TOKEN_SECRET)
        if (user.isAdmin || standarRoutes.includes(route)) {
            res.user = user;
            next()
            return
        }
        return res.status(401).json({ error: 'Acceso denegado' })
    } catch (error) {
        res.status(400).json({ error: 'token no es válido' })
    }
}

module.exports = verifyToken
