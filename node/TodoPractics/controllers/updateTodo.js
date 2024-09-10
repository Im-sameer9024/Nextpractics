const Todo = require("../models/todo")

exports.updateTodo = async(req,res) =>{
  try {

    const{id} = req.params
    const{title,description} =  req.body;

    const updateTodo = await Todo.findByIdAndUpdate({_id:id},{title:title,description:description,createAt:Date.now()})
                      


    res.status(200).json({
      success:true,
      data:updateTodo,
      message:"Todo updated successfully",
    })

    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success:false,
      message:error.message,
      error:error,
    })
    
  }
}