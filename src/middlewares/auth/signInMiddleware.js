const User = require("../../models/User")

const signInMiddleware = async ({ body }, res, next) => {
    try{
        if(!body.username) throw new Error('Username field is missing')
        if(!body.password) throw new Error('Password field is missing')
        if(body.password.length < 8) throw new Error('Password must have at least 8 characters')

        const usernameCheck = await User.findOne({username: body.username})

        if(usernameCheck) throw new Error('Given username is already in use')

        next()
    }catch(error){
        res.status(400).send({
            errors: error.message
        })
    }
}

module.exports = signInMiddleware