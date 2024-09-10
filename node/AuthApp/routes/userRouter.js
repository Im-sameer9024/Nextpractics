const express = require("express")
const route = express.Router()

const{login,signup} = require("../controllers/user")
const{auth,isStudent,isAdmin} = require("../middlewares/auth")


route.post("/signup",signup)
route.post("/login",login)

route.get("/test",auth,(req,res) =>{
  res.json({
    success:true,
    message:"is for auth"
  })
})

route.get("/student",auth,isStudent,(req,res) =>{
  res.json({
    success:true,
    message:"it is for Student"
  })
})

route.get("/admin",auth,isAdmin,(req,res) =>{
  res.json({
    success:true,
    message:"is for admin"
  })
})
module.exports = route;