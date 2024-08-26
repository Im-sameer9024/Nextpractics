const express = require("express")
const route = express.Router()

// const{} = require("../controllers/postController")
// const{} = require("../controllers/likeController")
const{createComment} = require("../controllers/commentController")

route.post("/comment",createComment)



module.exports = route;

