const express = require("express"); 
const app = express(); 

const authRouter = require("./routes/auth.route")
const sauceRouter = require("./routes/sauce.route")
const cookieParser = require("cookie-parser")

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  
app.use(cookieParser())

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('./public'));
app.use('/uploads', express.static('uploads'));


app.use("/api/auth", authRouter)
app.use("/api/sauces", sauceRouter)



module.exports = app