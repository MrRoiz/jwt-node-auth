const authRouter = require( "./auth.js")

const applyRoutes = (app) => {
    app.use('/auth', authRouter)
}

module.exports = applyRoutes