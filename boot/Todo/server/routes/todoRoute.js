const express = require("express")
const route = express.Router()


const{createTodo} = require("../controllers/createTodo")
const{getTodos,getSingleTodo} = require("../controllers/getTodos")
const{updateTodo} = require("../controllers/updateTodo")
const{deleteTodo} = require("../controllers/deleteTodo")


route.post("/create",createTodo)
route.get("/all",getTodos)
route.get("/single/:id",getSingleTodo)
route.put("/update/:id",updateTodo)
route.delete("/delete/:id",deleteTodo)

module.exports = route;