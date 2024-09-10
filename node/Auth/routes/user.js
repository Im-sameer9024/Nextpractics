const express = require("express")
const route = express.Router()

const{login,signup} = require("../controllers/Auth")
const{auth,isAdmin,isStudent} = require("../middlewares/auth")

route.post("/login",login)
route.post("/signup",signup)

// Protected Route 

route.get("/test",auth,(req,res) =>{
  res.json({
    success:true,
    message:"Welcome to test "
  })
})

route.get("/student",auth,isStudent,(req,res) =>{
  res.json({
    success:true,
    message:"Welcome to student in protected route"
  })
})

route.get("/admin",auth,isAdmin,(req,res) =>{
  res.json({
    success:true,
    message:"Welcome is the Admin"
  })
})

module.exports = route;