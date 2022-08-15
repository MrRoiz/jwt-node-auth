const authRouter = require( "./auth.js")
const protectedRouter = require("./protected.js")

const applyRoutes = (app) => {
    app.use('/auth', authRouter)
    app.use('/protected', protectedRouter)
}

module.exports = applyRoutes