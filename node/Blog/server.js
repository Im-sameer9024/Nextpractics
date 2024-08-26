const express = require("express");
const app = express()
require("dotenv").config()
const port = process.env.PORT || 5000;
const dbConnect = require("./config/database")
const blog = require("./routes/blog")
dbConnect();



app.use(express.json())


app.use("/api",blog)



app.get("/",(req,res) =>{
  res.send("This is Home Page.")
})

app.listen(process.env.port,()=>{
console.log(`Port is on ${port}`)
})