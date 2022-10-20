const express = require("express")
const sauceRouter = express.Router()
const {getSauce, getAllSauce, postSauce, upload} = require("../controllers/sauce.controller")




  

sauceRouter.get("/:id", getSauce)

sauceRouter.get("/", getAllSauce)

sauceRouter.post("/", upload.single("image"),  postSauce)



module.exports = sauceRouter