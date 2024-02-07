const jwt = require('jsonwebtoken')
const JWT_SECRET = require('./config')

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || authHeader.startWith('Bearer ')) {
        return res.status(403).json({})
    }
    const authToken = authHeader.split(" ")[1]
    try {
        const token = jwt.verify(authToken, JWT_SECRET)
        req.userId = token.userId
        next()
    } catch (error) {
        return res.status(403).json({})
    }
}
module.exports({
    authMiddleware
})

