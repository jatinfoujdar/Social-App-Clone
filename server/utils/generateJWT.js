import jwt from "jsonwebtoken";

const generateJWT = (userId,res)=>{
    const token = jwt.sign({id: userId},process.env.JWT_SECRET,{
        expiresIn: "1d"
    })
    res.cookie("jwt",token,{
        httpOnly: true,
        maxAge: 15*24*60*1000,
        sameSite: "strict",
    })
    return token;
}


export default generateJWT;