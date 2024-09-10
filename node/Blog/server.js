const express = require('express');
const dbConnect = require('./config/database');
const app = express();
const port = process.env.PORT || 3000;
const blog = require("./routes/Blog")


app.use(express.json())
app.use("/api",blog)

dbConnect();
app.get("/",(req,res) => {
  res.send("This is Home Page.")
})

app.listen(port,() => {
  console.log("Server is running on port ",port)
})