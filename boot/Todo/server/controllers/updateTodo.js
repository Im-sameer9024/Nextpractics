const Todo = require("../models/Todo")

exports.updateTodo = async(req,res) =>{
  try {

    const {id} = req.params;
    const{title,description,createdAt} = req.body;

    const todo = await Todo.findByIdAndUpdate({_id:id},{title:title,description:description,createdAt:createdAt})

    res.status(200).json({
      success:true,
      data:todo,
      message:"Todo updated"
    })
    
  } catch (error) {

    res.status(500).json({
      success:false,
      data:error.message,
      message:"network error"
    })
  }
}