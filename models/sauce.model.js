const mongoose = require("mongoose")

const sauceSchema = new mongoose.Schema({
    userId: String, 
    name : String, 
    manufacturer: String, 
    description : String,  
    mainPepper: String, 
    imageUrl: String,  
    heat: Number, 
    likes: Number, 
    dislikes: Number, 
    usersLiked: Array, 
    usersDisliked: Array, 
})

module.exports = mongoose.model("sauce", sauceSchema) 