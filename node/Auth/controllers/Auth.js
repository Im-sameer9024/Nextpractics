const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require('dotenv').config()

exports.signup = async (req, res) => {
  try {

    //data fetch

    const { name, email, password, role } = req.body;

    //Check User 

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already Exists"
      })
    }

    // Password hashed 
    let hashPassword;
    try {
      hashPassword = await bcrypt.hash(password, 10)

    } catch (error) {
      return res.status("500").json({
        success: false,
        message: "Password not Hashed"
      })
    }

    // Entry create in Database

    let user = new User({
      name, email, password: hashPassword, role
    })

   await user.save()

    res.status(200).json({
      success: true,
      message: "User Registered"
    })


  } catch (error) {

    return res.status(500).json({
      success: false,
      message: "Network Error"
    })

  }
}


exports.login = async (req, res) => {
  try {

    // fetch the data 
    const { email, password } = req.body

    // check the field 

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill the info carefully"
      })
    }
    // check db with user 

    let user = await User.findOne({ email })

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User is not Registered"
      })
    }

    // check password and hashedPassword and create jwt token

    let payload = {
      email: user.email,
      id: user._id,
      role: user.role
    }

    if (await bcrypt.compare(password, user.password)) {

      let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '2h'
      })

      user = user.toObject();
      user.token = token;
      user.password = undefined;

      let options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      }

      res.cookie("token", token, options).json({
        success: true,
        token,
        user,
        message: "User is logged IN"
      })
    } else {
      return res.status(403).json({
        success: false,
        message: "Password Incorrect"
      })
    }

  } catch (error) {

    console.log(error)
    res.status(500).json({
      success: false,
      message: "Login failure"
    })

  }
}