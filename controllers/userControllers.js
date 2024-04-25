const User=require('../models/userModels')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const GetDone=(req,res)=>{
res.send('hello')
}


const Register=async(req,res)=>{
try { 
     const {email,password}=req.body
   const existUser= await User.findOne({email:email})
   if (existUser){
    
    res.status(400).json({msg:"email already exists try to login"})
   }
   else{
    const hashPw=await bcrypt.hash(password,10)
    const myuser=await User.create({email,password:hashPw})
    const token=await jwt.sign({id:myuser._id},process.env.jwt_key,{expiresIn:"7D"})
    res.status(200).json({"msg":"registered",token})
    console.log(hashPw)
   }

} catch (error) {
    res.status(500).json({"msg":"cannot register",error})
    console.log("hello")

}
}
const Login=async(req,res)=>{
    try { 
         const {email,password}=req.body
       const existUser= await User.findOne({email:email})
       if (!existUser){
        
        res.status(400).json({msg:"email doesnt exist !try to register"})
       }
       else{
        const verifyPassword=await bcrypt.compare(password,existUser.password)
        if(!verifyPassword){
            res.status(400).json({msg:"incorrect password"})
        }
        else{
        const token=await jwt.sign({id:existUser._id},process.env.jwt_key,{expiresIn:"7D"})
        res.status(200).json({"msg":"login done",token})
        }
       
       }
    
    } catch (error) {
        res.status(500).json({"msg":"something went wrong ",error})
    
    }
    }
const getUserData=async(req,res)=>{
    try {
        console.log(req.body.userId)
        const userdata=await User.findOne({_id:req.body.userId})
        res.status(200).json({msg:"get users",userdata})
    } catch (error) {
        res.status(500).json({"msg":"something went wrong ",error})

    }
}

module.exports={GetDone,Register,Login,getUserData}
