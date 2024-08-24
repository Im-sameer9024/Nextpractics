const Todo = require("../models/Todo")

exports.deleteTodo = async(req,res) =>{
  try {

    const{id} = req.params;
    await Todo.findByIdAndDelete({_id:id})

    res.status(200).json({
      success:true,
      message:"Data is Deleted"
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