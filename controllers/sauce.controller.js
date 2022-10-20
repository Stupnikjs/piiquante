const sauceSchema = require("../models/sauce.model")
const multer = require("multer")
const fs = require('fs');


// SET STORAGE

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname.slice(0,15) + '-' + new Date().getDay() +"-"+ new Date().getMonth() )
    }
  })
   

var upload = multer({ storage: storage })


function getSauce(req, res){
console.log("sauce")
}

function getAllSauce(req, res){
console.log('get all sauce')

}

function postSauce(req, res){
    console.log(req.body.sauce)

    }
 



module.exports = {getSauce, getAllSauce, postSauce, upload}