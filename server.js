require("dotenv").config()

const express = require('express');

//const app = express(); is for creating an express application
const app = express();

const connectdb = require('./config/db.config')




connectdb();


//set port, listen for requests
const PORT = process.env.port || 8080 

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})