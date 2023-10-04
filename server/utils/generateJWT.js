import jwt from "jsonwebtoken";

const generateJWT = (userId,res)=>{
    const token = jwt.sign({id: userId})
}


export default generateJWT;