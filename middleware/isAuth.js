const jwt = require('jsonwebtoken')
const UserModel = require('../modules/auth/user')

async function isAuth(req, res, next) {
    const token = req.headers.authorization
    try {
        if(!token) throw new ErrorEvent("Empty")

        const decodeData = jwt.verify(token, process.env.PRIVATE_KEY)

        const { userId } = decodeData
        const existedUser = await UserModel.findById(userId)

        if(!existedUser) throw new Error('User are not existed')

        req.user = existedUser
        next()
    }catch(err) {
        res.status(404).send({success : 0, messgage : err.message})
    }
}


async function enhanceAuth(req, res, next) {
    const token = req.headers.authorization
    try {
        if(!token) return next()
        const decodeData = jwt.verify(token, process.env.PRIVATE_KEY)

        const { userId } = decodeData
        const existedUser = await UserModel.findById(userId)

        if(!existedUser) throw new Error('User are not existed')

        req.user = existedUser
        next()
    }catch(err) {
        next()
    }
}

module.exports = {
    isAuth,
    enhanceAuth
}