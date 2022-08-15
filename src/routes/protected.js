const express = require("express");
const { validateJWTMiddleware } = require("../middlewares/auth");

const protectedRouter = express.Router();

protectedRouter.get(
    "/loggedUser", 
    validateJWTMiddleware, 
    (req, res) => {
        res.status(200).send(req.user)
    }
);

module.exports = protectedRouter;
