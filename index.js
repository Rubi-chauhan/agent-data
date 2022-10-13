const mongoose = require('mongoose')
const express = require('express');
const app = express();

const cors = require('cors')
const path = require('path')

const route = require('./src/routes/route')
require('dotenv').config()

const multer = require('multer')
app.use(multer().any())


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

const PORT = process.env.PORT || 3000


mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true
}).then(()=> app.listen(PORT, ()=>{
    console.log(`App running on ${PORT}`,'🔥')
}))


app.use('/', route)