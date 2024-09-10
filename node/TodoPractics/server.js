const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT || 3000
const dbConnect = require("./config/db.js")
const Todo = require("./routes/Todo.js")

app.use(express.json())

app.use("/api",Todo)

dbConnect();


app.get('/',(req,res) =>{
  res.send("Welcome in Home Page.")
})

app.listen(port,() =>{
  console.log(`App is on ${port}`)
})

