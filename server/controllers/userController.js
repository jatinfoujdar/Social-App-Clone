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

