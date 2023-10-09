import User from "../schema/userSchema.js";
import bcrypt from "bcryptjs";
import generateJWT from "../utils/generateJWT.js";

export const signupUser = async(req,res)=>{
  
    try {
        const {name,email,username,password} = req.body;
        const user = await User.findOne({$or:[{email},{username}]});

        if(user){
            return res.status(400).json({message: "User already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            name,
            email,
            username,
            password:hashedPassword
        })
        
        await newUser.save();

        if(newUser){
            generateJWT(newUser._id,res);
            res.status(201).json({

                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                username: newUser.username,
            })
        }else{
            res.status(400).json({message: "Invalid User Data"})
        }

    } catch (error) {
        res.status(500).json({message: error.message})
        console.log("error in signup user: ",error.message);
    }
}


export const loginUser =  async(req,res)=>{
    try {
        const {username,password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password,user?.password || "");

        if(!user || !isPasswordCorrect){
            return res.status(400).json({message: "Invaild Username and Password"});
        }
        generateJWT(user._id,res);
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            username: user.username,
        })
        
    } catch (error) {
        res.status(500).json({message: error.message});
        console.log("Error is login User", error.message);
    }
}

export const logoutUser = async(req,res)=>{

    try {
        res.cookie("jwt","",{maxAge:1});
        res.status(200).json({message: "User Logged Out Successfully"});

    } catch (error) {
        res.status(500).json({message: error.message});
        console.log("Not able to logged out", error.message);
    }
}

export const follower = async(req, res)=> {
    try {
        const { id } = req.params;
        const userToModify = await User.findById(id);
        const currentUser = await User.findById(req.user._id);

         // Check if req.user is defined and has an _id property
        //  if (!req.user || !req.user._id) {
        //     return res.status(401).json({ message: "Authentication required" });
        // }

        // Check if the user is trying to follow/unfollow themselves
        if (id === req.user._id.toString()) {
            return res.status(400).json({ message: "You cannot follow/unfollow yourself" });
        }

        // Check if userToModify and currentUser exist
        if (!userToModify || !currentUser) {
            return res.status(400).json({ message: "User not found" });
        }

        const isFollowing = currentUser.following.includes(id);

        if (isFollowing) {
            // Unfollow user
            await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id } });
            await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } });
            res.status(200).json({ message: "User unfollowed successfully" });
        } else {
            // Follow user
            await User.findByIdAndUpdate(id, { $push: { followers: req.user._id } });
            await User.findByIdAndUpdate(req.user._id, { $push: { following: id } });
            res.status(200).json({ message: "User followed successfully" });
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
        console.error("Error in follow User Route", error.message);
    }
}

export const updateUser = async(req,res)=>{
    console.log(`Received ${req.method} request at ${req.originalUrl}`);
    const { name,email,username,password,profilePic,bio } = req.body;
        const userId = req.user._id;
    try {
        let user = await User.findById(userId);
        if(!user){
            return res.status(400).json({message: "User not found"});
        }

        if(req.params.id !== userId.toString()){
          return res.status(400).json({message: "You can't update other profile's"})
        }

        if(password){
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password,salt);
            user.password = hashedPassword;
        }
        user.name = name || user.name;
        user.email = email || user.email; 
        user.username = username || user.username;
        user.profilePic = profilePic || user.profilePic;
        user.bio = bio || user.bio;

        user = await user.save()
        res.status(200).json({message:"Profile updated successflly",user})

    } catch (error) {
        res.status(500).json({ message: error.message });
        console.error("Error in Update User Route", error.message);
    }
}   