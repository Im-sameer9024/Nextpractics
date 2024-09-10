const express = require("express")
const app = express()

require("dotenv").config()

const port = process.env.PORT
const fileUpload = require("express-fileupload")
const dbConnect = require("./config/db")
const cloudinaryConnect = require("./config/cloudinary")
const Upload = require("./routes/Fileuploads")


app.use(express.json())

app.use(fileUpload())

app.use('/api',Upload)

dbConnect()
cloudinaryConnect()


app.listen(port,()=>{
  console.log(`app is on ${port}`)
})