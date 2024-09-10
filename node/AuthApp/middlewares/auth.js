const jwt = require("jsonwebtoken")
require("dotenv").config()

exports.auth = (req,res,next) =>{
  try {
    const token = req.body.token;

    if(!token){
      return res.status(401).json({
        success:false,
        message:"Token is Missing"
      })
    }

    try {

      const decode = jwt.verify(token,process.env.SECRET_KEY)
      console.log(decode)
      req.user = decode
      
    } catch (error) {
      return res.status(403).json({
        success:false,
        message:"token is invalid"
      })
      
    }

    next()
    
  } catch (error) {

    return res.status(401).json({
      success:false,
      message:"Something went wrong"
    })
    
  }
}


exports.isStudent = (req,res,next) =>{
 try {

  if(req.user.role !== "Student"){
    return res.status(401).json({
      success:false,
      message:"This route is for student user"
    })
  }
  next()
  
 } catch (error) {

  return res.status(500).json({
    success:false,
    message:"User role can't verify"
  })
  
 }
  
}


exports.isAdmin = (req,res,next) =>{
  try {
 
   if(req.user.role !== "Admin"){
     return res.status(401).json({
       success:false,
       message:"This route is for admin user"
     })
   }
   next()
   
  } catch (error) {
 
   return res.status(500).json({
     success:false,
     message:"User role can't verify"
   })
   
  }
   
 }