const express=require ('express')
app=express()
const dotenv=require('dotenv')
dotenv.config({path:'./config/dotenv'})
const connectDB=require("./config/connectDB")
const cors=require('cors')

connectDB()
// the  middleware is mandatory to read  the req.body
app.use(express.json())
app.use(cors())
port=process.env.PORT || 8081
app.use('/api',require('./routes/userRoutes'))
app.use('/api/product',require('./routes/productRoutes'))
app.listen(port,(err)=>{
    err?console.log(err):console.log("port is running on  port",port)
})