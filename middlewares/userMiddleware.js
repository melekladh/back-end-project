const jwt=require('jsonwebtoken')
const userMiddleWare=async(req,res,next)=>{
    try {
        const token=req.headers.token
        //if the token is undefined 
    
        if(!token){
            res.status(400).json({msg:"you are not authorized"})
        }
        else{
            //we have to verify if the token is correct 
    const verifyToken=await jwt.verify(token,process.env.jwt_key)
    if (!verifyToken){
        //if the token is uncorrect 
        res.status(400).json({msg:"you are not authorized"})
    
    }
    else{
        req.body.userId=verifyToken.id
        next()
    }
        }
    } catch (error) {
        res.status(500).json({msg:"something went wrong"})
    }
}


module.exports=userMiddleWare