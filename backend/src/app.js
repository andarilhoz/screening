const dotenv = require('dotenv').config({ path: '../.env' })
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()
const server = require('http').Server(app)


mongoose.connect(process.env.MONGO_URL,
{
    useNewUrlParser: true   
}).catch(error => {
    console.log("Error connecting to DB - %s", error)
    process.exit();
})


app.use(express.json())
app.use(routes)


server.listen(process.env.APP_PORT)
console.log("Running at %s", process.env.APP_PORT)
