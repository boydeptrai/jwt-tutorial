const express = require('express');
const cors = require('cors')
const dotenv =require('dotenv')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

dotenv.config()
const app = express();

mongoose.connect(process.env.MONGODB_URL,() =>{
    console.log("CONNECTED TO MONGODB")
})
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.listen(8000,() =>{
    console.log("Server is running... ")
})