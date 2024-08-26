const Todo = require("../models/Todo")

exports.getTodos = async(req,res) =>{
  try {

    const allTodos = await Todo.find({});

    res.status(200).json({
      success:true,
      data:allTodos,
      message:"All Todos got"
    })
    
  } catch (error) {

    console.log(error)
    res.status(500).json({
      success:false,
      data:error.message,
      message:"Data is not got"
    })
    
  }
}


exports.getTodoById = async(req,res)=>{
  try {
    const {id} = req.params;
    const todo = await Todo.findById({_id:id});

    if(!todo){
      return res.status(404).json({
        success:false,
        message:"Todo not found"
      })
    }

    res.status(200).json({
      success:true,
      data:todo,
      message:"Todo get successfully"
    })

    
  } catch (error) {

    console.log(error)
    res.status(500).json({
      success:false,
      data:error.message,
      message:"Network Issues"
    })
    
  }
}

