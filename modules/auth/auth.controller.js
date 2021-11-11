const bcrypt = require('bcryptjs')
const UserModel = require('./user')

const createUser = async ({email, password, name}) => {

    const existedUser = await UserModel.findOne({ userEmail : email })

    if(existedUser) throw new Error('Existed user')

    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(password, salt)

    const newUser = await UserModel
                        .create({ userEmail : email, userPassword: password, userName: name })

    return newUser
}

const login = async ({email, password}) => {
    const existedUser = await UserModel.findOne({ userEmail : email })

    if(!existedUser) throw new Error('Not found User')

    const hashPassword = existedUser.password

    const comparedPassword = bcrypt.compareSync(password, hashPassword)

    if(!comparedPassword) throw new Error('Password is wrong')

    const data = { userId: existedUser._id }

    const token = jwt.sign(
        data,
        process.env.PRIVATE_KEY,
        
        { expiresIn: process.env.EXPIRE_TIME }
    )
    return {user : existedUser, token}

}

module.exports = {
    createUser,
    login
}