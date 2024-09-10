const Post = require("../models/postModel")

exports.createPost = async(req,res) =>{
  try {
    const{title,body} = req.body;

    const post = new Post({
      title,body
    })

    const savedPost = await post.save()

    res.status(200).json({
      success:true,
      post:savedPost,
      message:"Post is created"
    })
    
  } catch (error) {
    
    return res.status(500).json({
      success:false,
      message:error.message
    })

  }
}

exports.getAllPosts = async(req,res) =>{
  try {
    const posts = await Post.find({}).populate("likes").populate("comments").exec()

    res.status(200).json({
      success:true,
      post:posts,
      message:"Post is fetched"
    })
    
  } catch (error) {

    return res.status(500).json({
      success:false,
      message:error.message
    })
    
  }
}