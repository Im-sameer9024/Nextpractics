const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT;
const dbConnect =  require("./config/db")
const userCheck = require("./routes/userRouter")

dbConnect();
app.use(express.json())

app.use("/api",userCheck)

app.get("/",(req,res) =>{
  res.send("Database is connected")
})

app.listen(port,()=>{
  console.log(`Port is on ${port}`)
})