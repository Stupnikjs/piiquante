const express = require("express")
const authRouter = express.Router()
const {getSigninForm} = require("../controllers/signin.controller")


authRouter.post("/signup", getSigninForm)

module.exports = authRouter