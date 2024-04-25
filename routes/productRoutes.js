const express=require('express')
const router=express.Router()
const {createProduct, deleteProduct,getProducts, updateproduct}=require('../controllers/productControllers')
// we verify if the token is correct by using a middlewqare
const userMidlleware=require('../middlewares/userMiddleware')

router.post('/addproduct',userMidlleware,createProduct)
router.get('/getproduct',getProducts)
router.put('/updateproduct',userMidlleware,updateproduct)

router.delete('/deleteproduct',userMidlleware,deleteProduct)

module.exports=router