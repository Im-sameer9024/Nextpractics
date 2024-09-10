const Todo = require("../models/todo")

exports.deleteTodo = async(req,res) =>{
  try {

    const{id} = req.params;

    await Todo.findByIdAndDelete({_id:id})

    res.status(200).json({
      success:true,
      message:"Data is deleted"
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