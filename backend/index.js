const express = require('express');
const cors = require('cors')
const dotenv =require('dotenv')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')


const app = express();

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.listen(8000,() =>{
    console.log("Server is running... ")
})