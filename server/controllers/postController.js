import User from "../schema/userSchema.js";
import Post from "../schema/postSchema.js";




export const createPost = async(req,res)=>{
    try {
        const { postedBy,text,img} = req.body;

        if(!postedBy || !text){
         return res.status(400).json({message:"Please Fill All the fields"})
        }
        const user = await User.findById(postedBy);
        if(!user){
            return res.status(404).json({message:"User not found"})
        }

        const maxLength = 500;
        if(text>maxLength){
            return res.status(400).json({message:`Text must be less than ${maxLength} character`})
        }

        const newPost = new Post({postedBy,text,img});
        await newPost.save();

        res.status(201).json({message: "Post created successfully",newPost})

        if(user._id .toString() !== req.user._id.toString()){
            return res.status(401).json({message:"Unauthorized to create post"})
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
		console.log("Error in createPost: ", error.message);
    }

}

export const getPost = async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id)

        if(!post){
            return res.status(404).json({message: "Post not found"})
        }
        res.status(200).json({message: "Post found", post})

    } catch (error) {
        res.status(500).json({ error: error.message });
		console.log("Error in getPost: ", error.message);
    }
}

export const deletePost = async(req,res)=>{
    try {
        const post =await Post.findById(req.params.id)
        if(!post){
            return res.status(404).json({message: "Post not found"})
        }

        if(post.postedBy.toString() !== req.user._id.toString()){
            return res.status(401).json({message: "Unauthorized to delete Post"})
        }
        await Post.findByIdAndDelete(req.params.id);
        
        res.status(500).json({message: "Post deleted successfully"})

    } catch (error) {
        res.status(500).json({ error: error.message });
		console.log("Error in deletePost: ", error.message);
    }
}

export const likeUnlikePost = async(req,res)=>{
try {
    const {id:postId} = req.params;
    const userId = req.user._id;

    const post = await Post.findById(postId);
    if(!post){
        return res.status(404).json({message: "Post not found"})
    }
    const userLikedPost = post.likes.includes(userId);
    if(userLikedPost){
     await Post.updateOne({_id:postId},{$pull: {likes: userId}})
     res.status(200).json({message: "Post Unlikes successfully"})
    }else{
        post.likes.push(userId);
        await post.save();
        res.status(200).json({message: "Post Liked successfully"})
    }


} catch (error) {
    res.status(500).json({ error: error.message });
		console.log("Error in likeUnlikePost: ", error.message);
}
}