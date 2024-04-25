const mongoose=require("mongoose")
const userSchema=mongoose.Schema(
    {
        "email":{type:String,require:true},
        "password":{type:String,require:true},
        role: { type: String, enum: ['user', 'admin'], default: 'user' }, //
    }
)
// creating the model takes two parameters :the name of the collection that will 
// be created in the database taskmanagement and the schema
const User=mongoose.model("user",userSchema)
module.exports=User