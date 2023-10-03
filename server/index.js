import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/db.js";
import cookieParser from "cookie-parser";


dotenv.config();
connectDB();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


app.listen(PORT,()=>console.log(`Server started at http://localhost:${PORT}`));