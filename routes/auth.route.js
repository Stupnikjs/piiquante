const express = require("express")
const authRouter = express.Router()
const {getSigninForm} = require("../controllers/signin.controller")
const {checkLoginForm} = require("../controllers/login.controller")





authRouter.post("/signup", getSigninForm)


authRouter.post("/login",checkLoginForm )


module.exports = authRouter