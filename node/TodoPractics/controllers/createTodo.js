const Todo = require("../models/todo")

exports.createTodo = async(req,res) =>{
  try {

    const{title,description} = req.body;
    const todo = new Todo({
      title,description
    })

    const savedTodo = await todo.save()

    res.status(200).json({
      success:true,
      data:savedTodo,
      message:"Data is saved"
    })
    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success:false,
      message:"Network Error"
    })
    
  }
}