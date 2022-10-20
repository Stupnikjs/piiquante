const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email : String, 
    password: String, 
})

module.exports = mongoose.model("user", userSchema) // user va servir d'identifiant à la collection