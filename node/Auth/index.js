const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT || 4000
const dbConnection = require("./config/database")
const user = require("./routes/user")


dbConnection();

app.use(express.json())

app.use("/api",user)

app.get("/",(req,res) =>{
  res.send("This is my Home Page.")
})

app.listen(port,()=>{
  console.log(`Port is on ${port}`)
})
