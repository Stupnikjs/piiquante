const mongoose = require("mongoose")

const sauceSchema = new mongoose.Schema({
    sauce : String, 
    image: File, 
})

module.exports = mongoose.model("user", sauceSchema) // user va servir d'identifiant à la collection