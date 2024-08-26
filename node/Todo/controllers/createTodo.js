const Todo = require("../models/Todo")

exports.createTodo = async(req,res) =>{
  try {
    const{title,description} = req.body;

    const todo = await Todo.create({title,description});

    res.status(200).json({
      success:true,
      data:todo,
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
