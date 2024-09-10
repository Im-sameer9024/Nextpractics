const mongoose = require("mongoose")
require("dotenv").config()


const dbConnect = () =>{
  mongoose.connect(process.env.DB_URL,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
  })
  .then(()=>{
    console.log("Database is connected")
  })
  .catch((error) =>{
    console.log(error)
    process.exit(1)
  })
}

module.exports = dbConnect;