const express = require("express")
const sauceRouter = express.Router()
const jwt = require("jsonwebtoken"); 
const {getSauce, getAllSauce, postSauce, upload} = require("../controllers/sauce.controller")

// iat : date where the token was created (issued at)

const authorize = (req, res, next) => {
    reqToken = req.headers.authorization.split(" ")[1]
    
        const verify = jwt.verify(reqToken, "secret", {algorithm:"HS256"})
        
        if (verify) next()
        else res.redirect('/login')
        
    }
  

  

sauceRouter.get("/:id", authorize, getSauce)

sauceRouter.get("/", authorize, getAllSauce)

sauceRouter.post("/", authorize,  upload.single("image"),  postSauce)



module.exports = sauceRouter