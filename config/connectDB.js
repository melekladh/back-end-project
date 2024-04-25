const mongoose=require("mongoose")

const connectDB=()=> {
    mongoose.connect(process.env.MONGO)
    .then(()=>console.log("DB CONNECTED"))
    .catch(()=>console.log(err))

}
module.exports=connectDB