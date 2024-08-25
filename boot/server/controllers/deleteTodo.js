const Todo = require("../models/Todo")


exports.deleteTodo = async(req,res) =>{
  try {

    const{id} = req.params;
    await Todo.findByIdAndDelete({_id:id})

    res.status(200).json({
      success:true,
      message:"Todo is Deleted"
    })
    
  } catch (error) {

    res.status(500).json({
      success:false,
      message:"network error"
    })
    
  }
} 