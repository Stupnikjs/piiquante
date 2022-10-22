const argon2 = require("argon2")
const userSchema = require("../models/user.model")
const jwt = require("jsonwebtoken")


async function checkLoginForm(req, res){
    console.log(req.body)
    res.cookie("auth", true)
    const emailRequest = req.body.email
    const passwordRequest = req.body.email
    const user = await userSchema.findOne({
        email : emailRequest
    }) 
    if ( argon2.verify(user.password, passwordRequest)) {
        token = jwt.sign({ 
            email: user.email}, 
            "secret", 
            {
                algorithm:"HS256", 
                // expiresIn: "1h"
    }) 
        res.cookie("auth", token)
        res.send({userId : user._id, token: token})
        console.log("password correct")

    } 
    
}



module.exports = {checkLoginForm}