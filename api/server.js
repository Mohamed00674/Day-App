const express = require("express")
require('dotenv').config()
const cors = require('cors')
const mongoose = require ('mongoose')
const crud = require('./routes/crud')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/tasks' , crud )

const url = 'mongodb://127.0.0.1:27017/day-app' 
const connectMongodb =  async () => {
    try {
      await mongoose.connect(url)
      console.log('DataBase connected ')
    } catch (error) {
      console.error(error)
    }
}

connectMongodb()
app.listen(2400,  () => {
  console.log("Express server listening on port " + 2400);
});