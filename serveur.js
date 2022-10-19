const http = require('http');
const app = require('./app');

const mongoose = require('mongoose')
const dotenv = require('dotenv'); 

const port = getPort()




dotenv.config();


mongoose.connect(process.env.DB_CONFIG, ()=> {
    console.log("DB connected")
})

function getPort(){
    if (process.env.PORT != undefined || process.env.PORT != null  ) return process.env.PORT
    else return "3000"
}



const server = http.createServer(app)



server.listen(port, () => {
    console.log(`serveur connecté au port ${port}`)
})