require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const bookRouter = require('./routers/Books.routes')
const userRouter = require('./routers/users.router')
const app = express()
app.use(bodyParser.json())
const port = 3000
const uri = process.env.DB_URI;
const connectToDB = async() =>{
    try{
            mongoose.set('strictQuery',false)//this is concept in any program
            mongoose.connect(uri)//this is concept in any program
            console.log("connected to mongo DB")
        }
        catch(err){
            console.log("there is an error")
            process.exit()
    
        }
        
    }
    connectToDB()


//Handle router

app.use('/',userRouter)
app.use('',bookRouter)




app.use(function(req,res){
    res.status(404).send({url: req.originalUrl + " not found"})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})