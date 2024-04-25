const express=require("express")
const router=express.Router()
const {GetDone,Register,Login,getUserData,userm}=require('../controllers/userControllers')
const userMiddleWare=require('../middlewares/userMiddleware')
router.get("/hi",GetDone)
router.post("/register",Register)
router.post("/login",Login)
router.get("/userdata",userMiddleWare,getUserData)

module.exports=router