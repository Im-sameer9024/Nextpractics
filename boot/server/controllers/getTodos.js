const Todo = require("../models/Todo")


exports.getTodos = async(req,res) =>{

  try {
    const todos = await Todo.find({})

    res.status(200).json({
      success:true,
      data:todos,
      message:"Get all toods"
    })
    
  } catch (error) {

    res.status(500).json({
      success:false,
      data:error.message,
      message:"Error occured"
    })
    
  }

}


exports.getSingleTodo = async(req,res) =>{
  try {

    const {id} = req.params;
    
    const singleTodo = await Todo.findOne({_id:id})

    res.status(200).json({
      success:true,
      data:singleTodo,
      message:"Single Todo is got"
    })

    
  } catch (error) {

    console.log(error)
    res.status(500).json({
      success:false,
      data:error.message,
      message:"network issue"
    })
    
  }
}