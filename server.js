const express = require('express')
const colors=require('colors')
const dotenv= require('dotenv')
const{errorHandler} = require('./backend/middleware/errormiddleware')
const connectDB = require('./backend/controllers/config/db.js')
dotenv.config()
console.log("env",process.env.PORT)
const port=  process.env.PORT ||   5000
console.log(connectDB)
connectDB();

const app=express()

app.use(express.json())
2

app.use('/api/goals',require('./backend/routes/goalsroutes.js'))

app.use(errorHandler)
 
app.listen(port, () => console.log(`server started on port ${port}`))