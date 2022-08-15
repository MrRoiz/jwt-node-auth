const express = require("express");

const { signIn } = require("../controllers/auth.js");
const signInMiddleware = require("../middlewares/auth/signInMiddleware.js");

const authRouter = express.Router();

authRouter.post(
	"/signIn",
	signInMiddleware,
	signIn
);

module.exports = authRouter;
