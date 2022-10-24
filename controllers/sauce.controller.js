const sauceSchema = require("../models/sauce.model")
const fs = require('fs');
const { default: mongoose } = require("mongoose");


// SET STORAGE


async function getSauce(req, res){

 try {
  const sauce = await sauceSchema.findOne({ _id : req.params.id})
  res.status(200).json(sauce)
} catch (err){
 res.status(404).json({error: err})
}

}

async function getAllSauce(req, res){
const allSauce = await sauceSchema.find({})
res.status(200).send(allSauce)
}



function postSauce(req, res){
   
      const reqsauce = JSON.parse(req.body.sauce) 
      
      const sauceItem = new sauceSchema({
      name : reqsauce.name, 
      manufacturer: reqsauce.manufacturer, 
      description : reqsauce.description , 
      mainPepper: reqsauce.mainPepper, 
      heat: reqsauce.heat, 
      userId: reqsauce.userId, 
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
      likes: 0, 
      dislikes: 0, 
      usersLiked: [], 
      usersDisliked: [], 
      })
      sauceItem.save()
    }
 
function putSauce(req, res){
  if (req.method === "PUT") console.log(req.params.id)

}


module.exports = {getSauce, getAllSauce, postSauce, putSauce}
