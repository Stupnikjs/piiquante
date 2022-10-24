const express = require("express")
const jwt = require("jsonwebtoken"); 


const sauceRouter = express.Router()

const {getSauce, getAllSauce, postSauce, putSauce} = require("../controllers/sauce.controller")
const {upload} = require("../middlewares/multerConfig")

// iat : date where the token was created (issued at)

const authorize = (req, res, next) => {
    reqToken = req.headers.authorization.split(" ")[1]
    
        const verify = jwt.verify(reqToken, "secret", {algorithm:"HS256"})
        if (verify) next()
        else res.redirect('/login')
        
    }
  

  

sauceRouter.get("/:id", authorize, getSauce)
sauceRouter.put("/:id", authorize, putSauce)
sauceRouter.get("/", authorize, getAllSauce)

sauceRouter.post("/", authorize,  upload.single("image"),  postSauce)



module.exports = sauceRouter