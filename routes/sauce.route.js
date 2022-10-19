const express = require("express")
const sauceRouter = express.Router()
const {getSauce} = require("../controllers/sauce.controller")


sauceRouter.get("/:id", getSauce)





module.exports = sauceRouter