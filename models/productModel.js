const mongoose=require('mongoose')
const productSchema=mongoose.Schema({
title:{
    type:String,required:true
},
desc:{
    type:String,required:true

},
image:{
    type:String,required:true

},price:{
    type:Number,required:true

},
createdAt:{
    type:Date,
    default:new Date,
}


})

const Product=mongoose.model('product',productSchema)
module.exports=Product