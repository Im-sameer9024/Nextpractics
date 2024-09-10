const Todo = require("../models/todo")

exports.getTodo = async(req,res) =>{
  try {
    const{id} = req.params
    const todo = await Todo.findOne({_id:id})

    res.status(200).json({
      success:true,
      data:todo,
      message:"Data is fetched"
    })
    
  } catch (error) {

    console.log(error)
    res.status(500).json({
      success:false,
      data:error.message,
      message:"Network error"
    })
    
  }
}

exports.getAllTodo = async(req,res) =>{
  try {

    const allTodo = await Todo.find({})

    res.status(200).json({
      success:true,
      data:allTodo,
      message:"All Todos are fetched"
    })
    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success:false,
      data:error.message,
      message:"Network error"
    })
    
  }
}