const Todo = require("../models/Todo");

exports.createTodo = async(req,res) => {
  try {
    const{title,description,createdAt} = req.body;

    const todo = await Todo.create({title,description,createdAt});

    res.status(200).json({
      success:true,
      data:todo,
      message:"Todo is Added"
    })
    
  } catch (error) {
    console.log(error.message)
    res.status(500).json({
      success:false,
      data:error.message,
      message:"Network issue"
    })
    
  }
}