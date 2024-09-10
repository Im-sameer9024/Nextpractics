const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.signup = async(req,res) =>{
  try {

    const{name,email,password,role} = req.body;

    const existingUser = await User.findOne({email})

    if(existingUser){
      return res.status(401).json({
        success:false,
        message:"User already Exists"
      })
    }

    let hashedPassword;
    try {

      hashedPassword = await bcrypt.hash(password,10)
      
    } catch (error) {
      return res.status(406).json({
        success:false,
        message:"error in hashing Password"
      })
    }

    const savedUser = new User({
      name,email,password:hashedPassword,role
    })

    await savedUser.save()

    res.status(200).json({
      success:true,
      message:"User Registered"
    })
    
  } catch (error) {

    res.status(500).json({
      success:false,
      message:"Network Issues "
    })
    
  }
}


exports.login = async(req,res) =>{
  try {
    const{email,password} = req.body

    const existing = await User.findOne({email})

    if(!existing){
      return res.status(400).json({
        success:false,
        message:"User is not Registered"
      })
    }

    let payload = {
      email:existing.email,
      id:existing._id,
      role:existing.role
    }

    if(await bcrypt.compare(password,existing.password)){

      let token = jwt.sign(payload,process.env.SECRET_KEY,{
        expiresIn:"2h"
      })

      existing.toObject()

      existing.token = token
      existing.password = undefined

      let options = {
        expires:new Date(Date.now() + 3*24*60*60*1000),
        httpOnly:true,
      }

      res.cookie("token",token,options).json({
        success:true,
        token,
        existing,
        message:"User logged in"
      })
    }else{
      return res.status(403).json({
        success:false,
        message:"Password incorrect"
      })
    }
    
  } catch (error) {
    return res.status(500).json({
      success:false,
      message:"Network Error"
    })
    
  }
}