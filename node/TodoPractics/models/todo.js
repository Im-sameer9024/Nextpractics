const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
  },

  description:{
    type:String,
    required:true,
  },

  createAt:{
    type:String,
    default:Date.now,
  }
})

module.exports = mongoose.model("Todo",todoSchema);