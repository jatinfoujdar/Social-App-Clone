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