const express = require("express")
const route = express.Router()
const{createComment,deleteComment} = require("../controllers/commentController")
const{likePost,dislikePost} = require("../controllers/likeController")
const{createPost,getAllPosts} = require("../controllers/postController")



route.post("/comments/create",createComment)
route.post("/comments/delete",deleteComment)
route.post("/likes/like",likePost)
route.post("/likes/dislike",dislikePost)
route.post("/post/create",createPost)
route.get("/post/allPosts",getAllPosts)



module.exports = route;