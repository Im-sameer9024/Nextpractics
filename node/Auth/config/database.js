const mongoose = require("mongoose")
require("dotenv").config()



const dbConnection = () =>{
  mongoose.connect(process.env.MONGODB_URL,{
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

module.exports = dbConnection;