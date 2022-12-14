const express = require("express"); 
const app = express(); 
const path = require('path');
const authRouter = require("./routes/auth.route")
const sauceRouter = require("./routes/sauce.route")




app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, Cookies');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    
    next();
  });
  

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use('/images', express.static(path.join(__dirname, 'images')));

app.use("/api/auth", authRouter)
app.use("/api/sauces", sauceRouter)


module.exports = app