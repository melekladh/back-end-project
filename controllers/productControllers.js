const Product=require('../models/productModel')

const  getProducts = async (req,res)=>{
    try{
        const products = await Product.find()
        res.status(200).json({products})
    }catch(err){
        console.log(err);
        res.status(500).send("Error Interno del Servidor")
    }
}



//Create a new product
const createProduct = async (req,res)=>{
try {
    const newProduct=await Product.create(req.body)
    res.status(200).json(newProduct)
} catch (error) {
    res.status(500).json({msg:"something went wrong"})

}
}
const updateproduct = async (req,res)=>{
    try {
        const productUpdated=await Product.findOneAndUpdate(req.body)
        res.status(200).json(productUpdated)
    } catch (error) {
        res.status(500).json({msg:"something went wrong"})
    
    }
    }
// const deleteProduct = async (req,res)=>{
//     try {
//         const productdeleted=await Product.findByIdAndDelete(req.params.id)
//         res.status(200).json({msg:"product deleted",productdeleted} )
//     } catch (error) {
//         res.status(500).json({msg:"something went wrong"})
    
//     }
//     }
const deleteProduct = async (req,res)=>{
    
    try {
        const productdeleted=await Product.findOneAndDelete(req.body.title)
        res.status(200).json({msg:"product deleted",productdeleted} )
    } catch (error) {
        res.status(500).json({msg:"something went wrong"})
    
    }
    }
// export  default {createProduct};
module.exports={createProduct,deleteProduct,getProducts,updateproduct};