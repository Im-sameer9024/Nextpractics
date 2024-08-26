const express = require("express")
const app  = express()
require("dotenv").config()
const port = process.env.PORT || 5000
const dbConnect = require("./config/database")
const addTodo = require("./routes/todos")



dbConnect();
app.use(express.json())

app.use("/api",addTodo);


app.listen(port,()=>{
  console.log("Port is on ",port)
})

app.get("/",(req,res) => {
  res.send(
    "This is my Home Page."
  )
})