const sauceSchema = require("../models/sauce.model")
const fs = require('fs');
const { default: mongoose } = require("mongoose");




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
 
async function putSauce(req, res){
  if (req.method === "PUT") {
  
  let sauceItem = {
     ...req.body,    
  }
  
  if (req.file.filename) sauceItem.imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  await sauceSchema.findOneAndUpdate({_id:req.params.id}, sauceItem ) 
  res.json({ message : "sauce mise à jour" })
}
else {
 res.status(404)
}

}

async function deleteSauce(req, res){
  if (req.method === "DELETE"){
    try{
      await sauceSchema.findByIdAndRemove({_id: req.params.id})
      res.status(200).json({message: "sauce supprimée "})
    }catch(err){
      res.status(404).json({error: err})
    }
    
    
  }
}

async function postLike(req, res){
  
  const sauceId = req.params.id 
  let like = req.body.like 
  let userId = req.body.userId

  const sauce = await sauceSchema.findOne({ _id: sauceId})
  

  if (like === 1 && !sauce.usersLiked.includes(userId)) {
    try{
      sauce.usersLiked.push(userId);
      sauce.likes += 1; 
      await sauceSchema.findOneAndUpdate({ _id: sauceId} , 
        sauce) 
        res.status(200).json({message: "like pris en compte"}) 
     } catch(err){
      res.status(404).json({error: err})
     }
    }
    

  if (like === -1 && !sauce.usersDisliked.includes(userId)) {
      try{
        sauce.usersDisliked.push(userId); 
        sauce.dislikes += 1; 
        await sauceSchema.findOneAndUpdate({ _id: sauceId} , 
        sauce ) 
        res.status(200).json({message: "dislike pris en compte"}) 
      } catch(err){
      res.status(404).json({error: err})
      }
    }
  
  if (like === 0 && sauce.usersLiked.includes(userId)) {
      try{
        sauce.likes -= 1; 
        sauce.usersLiked.splice(sauce.usersLiked.indexOf(userId), 1) 
        
        await sauceSchema.findOneAndUpdate({ _id: sauceId}, sauce )
        
        res.status(200).json({message: "dislike ou like annulé"})
      } catch(err){
        res.status(404).json({error: err})
      }
      
    }
  
  if ( like === 0 && sauce.usersDisliked.includes(userId)) {
      try{
      sauce.dislikes -= 1; 
      sauce.usersDisliked.splice(sauce.usersDisliked.indexOf(userId), 1) 
      
      await sauceSchema.findOneAndUpdate({ _id: sauceId}, sauce)
      
      res.status(200).json({message: "dislike ou like annulé"})
      }catch(err){
      res.status(404).json({error: err})
    }
  } 
 
}  
  








module.exports = {getSauce, getAllSauce, postSauce, putSauce, deleteSauce, postLike}
