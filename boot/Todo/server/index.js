const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT || 6000
const todoRoute = require("./routes/todoRoute")
const cors = require("cors")
const dbConnect = require("./config/database")



dbConnect()
// middleware 
app.use(express.json())
app.use(cors())


// Mounting of routes 
app.use("/api",todoRoute)



app.listen(port,()=>{
  console.log(`Port is on ${port}`)
})

app.get("/",(req,res) =>{
  res.send("This is a Home page.")
})

