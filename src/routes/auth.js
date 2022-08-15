const express = require("express");

const { signIn, login } = require("../controllers/auth.js");
const { signInMiddleware, loginMiddleware } = require("../middlewares/auth.js");

const authRouter = express.Router();

authRouter.post("/signIn", signInMiddleware, signIn);

authRouter.post("/login", loginMiddleware, login);

module.exports = authRouter;
