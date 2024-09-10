const Post = require("../models/postModel")
const Like = require("../models/likeModel")

exports.likePost = async(req,res) =>{
  try {
    const{post,user} = req.body;
    const like = new Like({
      post,user
    })

    const savedLike = await like.save()

    const updatePost = await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true})
                       .populate("likes")
                       .exec()
                       
                       res.status(200).json({
                        success:true,
                        post:updatePost,
                        message:"Post is liked"
                       })
                       
  } catch (error) {

    return res.status(400).json({
      success:false,
      message:error.message
    })
    
  }
}

exports.dislikePost = async(req,res) =>{ 
  try {

    const{post,like} = req.body
    
    const deleteLike = await Like.findOneAndDelete({post:post,_id:like})

    const updatePost = await Post.findByIdAndUpdate(post,{$pull:{likes:deleteLike._id}},{new:true})
                       .populate("likes")
                       .exec()

                       res.status(200).json({
                        success:true,
                        post:updatePost,
                        message:"Post is liked"
                       })
    
  } catch (error) {

    return res.status(400).json({
      success:false,
      message:error.message,
    })
    
  }
}