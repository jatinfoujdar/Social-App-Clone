import User from "../schema/userSchema.js";
import jwt from "jsonwebtoken";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const userIdFromToken = decoded.id; // Access the 'id' property from the decoded token

    const user = await User.findById(userIdFromToken).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = user;

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.error("Error in Protected Route", error.message);
  }
};

export default protectRoute;
