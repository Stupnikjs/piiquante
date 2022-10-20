const argon2 = require("argon2")
const userSchema = require("../models/user.model")


async function getSigninForm(req, res){
 const email = req.body.email
 
 const emailAlreadyUsed = await userSchema.findOne({
   email: email
 })

 
 if (emailAlreadyUsed != null ){ console.log("email already taken"); res.send("email already used")}
 else {
   const password = req.body.password

 try{
    const hashedPassword = await argon2.hash(password)
    const user = new userSchema({
        email: req.body.email, 
        password : hashedPassword
    })
   await user.save()
   res.send("user created")

 } catch(err){
    console.log(err)
 }

 res.send("user registered")
 }
 


 
}




module.exports = {getSigninForm}