const argon2 = require("argon2")
const userSchema = require("../models/user.model")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")

async function checkLoginForm(req, res){
    const emailRequest = req.body.email
    const passwordRequest = req.body.email
    const user = await userSchema.findOne({
        email : emailRequest
    }) 
    if ( argon2.verify(user.password, passwordRequest)) {
        token = jwt.sign({ email: user.email}, "secret", {algorithm:"HS256"}) 
        res.cookie("auth", token)
        res.send({userId : user._id, token: token})
        console.log("password correct")

    } 
    
}



module.exports = {checkLoginForm}