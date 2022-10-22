const sauceSchema = require("../models/sauce.model")
const multer = require("multer")
const fs = require('fs');
const { default: mongoose } = require("mongoose");


// SET STORAGE

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname) // + '-' + new Date().getDay() +"-"+ new Date().getMonth() )
    }
  })
   

var upload = multer({ storage: storage })


function getSauce(req, res){
console.log("sauce")
}

async function getAllSauce(req, res){
const allSauce = await sauceSchema.find({})
res.send(allSauce)
}



function postSauce(req, res){
   
      const reqsauce = req.body.sauce 
      const imgUrlBackSlash = req.file.path
      const slash = /\\/
      let imgUrl = imgUrlBackSlash.replace(slash, "/")
      imgUrl = imgUrl.replace(slash, "/")
      console.log(imgUrl)
  
    
      const sauceItem = new sauceSchema({
      name : reqsauce.name, 
      manufacturer: reqsauce.manufacturer, 
      description : reqsauce.description , 
      mainPepper: reqsauce.mainPepper, 
      heat: reqsauce.heat, 
      userId: reqsauce.userId, 
      imageUrl: "http://localhost:3000/" + imgUrl, 
      likes: 0, 
      dislikes: 0, 
      usersLiked: [], 
      usersDisliked: [], 
      })
      sauceItem.save()
    }
 



module.exports = {getSauce, getAllSauce, postSauce, upload}
