import express from "express";
import { createPost, deletePost,  getFeedPost, getPost, likeUnlikePost, replyPost, } from "../controllers/postController.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/feed",protectRoute,getFeedPost)
router.get("/:id",getPost);
router.post("/create", protectRoute, createPost);
router.delete("/:id",protectRoute,deletePost);
router.post("/like/:id",protectRoute,likeUnlikePost);
router.post("/reply/:id",protectRoute,replyPost);

export default router;