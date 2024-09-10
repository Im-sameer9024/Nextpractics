const Post = require("../models/postModel")
const Comment = require("../models/commentModel")

exports.createComment = async (req, res) => {
  try {

    const { post, body, user } = req.body;

    const comment = new Comment({
      post, body, user
    })

    const savedComment = await comment.save()

    const updatePost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true })
      .populate("comments")
      .exec()

    res.status(200).json({
      success: true,
      post: updatePost,
      message: "Post is updated"
    })


  } catch (error) {

    return res.status(400).json({
      success: false,
      message: "Try Again"
    })

  }
}


exports.deleteComment = async (req, res) => {
  try {

    const { post, comment } = req.body;

    const deleteComment = await Comment.findOneAndDelete({post:post,_id:comment})
    

    const updatePost = await Post.findByIdAndDelete(post,{$pull:{comments:deleteComment._id}},{new:true})
                       .populate("comments")
                       .exec()

                       res.status(200).json({
                        success:true,
                        post:updatePost,
                        message:"Comment is Deleted"
                       })
  } catch (error) {

    return res.status(400).json({
      success:false,
      message:error.message,
    })
  }
}