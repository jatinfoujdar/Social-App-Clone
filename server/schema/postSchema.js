import mongoose, { mongo } from "mongoose";

const postSchema = mongoose.Schema({
    postedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    text:{
        type: String,
        maxLength: 500
    },
    img:{
        type: String,
    },
    likes:{
        type: Number,
        default: 0
    },
    replace:[{
        userId: {
            type: mongoose.Schema.Types.ObjectId ,
            required: "User",
            required: true,
        },
        text:{
            type: String,
            required: true
        },
        userProfilePic:{
            type: String,
        },
        username:{
            type: String,
        }
    }]
},{
    timestamps: true
})

const Post = mongoose.model("Post", postSchema);


export default Post;