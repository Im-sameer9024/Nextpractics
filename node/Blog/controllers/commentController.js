const Comment = require("../models/commentModel")
const Post = require("../models/postModel")

exports.createComment = async(req,res) =>{
  try {

    const{post,user,body} = req.body;

    const comments = new Comment({
      post,user,body
    })

    const savedComments = await comments.save()

    const updatePost = await Post.findByIdAndUpdate(post,{$push:{comments:savedComments._id}},{new:true})
    .populate("comments")
    .exec()

    res.status(200).json({
      success:true,
      post:updatePost,
      message:"Comment is create"
    })

    
  } catch (error) {

    console.log(error)
    res.status(500).json({
      success:false,
      post:error.message,
      message:"Network Issue"
    })
  }
}

