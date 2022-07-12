const express = require('express')
const bolly = require('./route/Bollywood')
const holly = require('./route/Hollywood')
const tech = require('./route/Technology')
const fit = require('./route/Fitness')
const food = require('./route/Food')
const home = require('./route/Home')
const cors = require("cors")
const app = express()

app.use(cors())
app.use("/api",bolly)
app.use("/api",holly)
app.use("/api",tech)
app.use("/api",fit)
app.use("/api",food)
app.use("/api",home)


app.listen(process.env.PORT||5000,()=>{
    console.log("app is running");
})