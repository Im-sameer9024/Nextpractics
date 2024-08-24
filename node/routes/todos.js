const express = require("express")
const route = express.Router()

const{createTodo} = require("../controllers/createTodo")
const{getTodos,getTodoById} = require("../controllers/getTodos")
const{updateTodo} = require("../controllers/updateTodo")
const{deleteTodo} = require("../controllers/deleteTodo")

route.post("/createTodo",createTodo)
route.get("/allTodos",getTodos)
route.get("/singleTodo/:id",getTodoById)
route.put("/updateTodo/:id",updateTodo)
route.delete("/deleteTodo/:id",deleteTodo)

module.exports = route;