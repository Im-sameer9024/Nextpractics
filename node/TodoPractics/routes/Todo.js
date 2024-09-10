const express = require('express');
const route = express.Router()

const {createTodo} = require("../controllers/createTodo")
const{getTodo,getAllTodo} = require("../controllers/getTodo")
const{updateTodo} = require("../controllers/updateTodo")
const{deleteTodo} = require("../controllers/deleteTodo")

route.post("/create",createTodo);
route.get("/todo/:id",getTodo);
route.get("/allTodo",getAllTodo);
route.put("/update/:id",updateTodo);
route.delete("/delete/:id",deleteTodo);

module.exports = route;
