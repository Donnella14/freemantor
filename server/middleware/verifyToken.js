import TokenAuth from "../helpers/TokenAuth.js";
const verifyToken = async (req,res,next)=>{
    const token = req.header("token");
    if(!token){
        return res.status(404).json({
            status:404,
            message:"no token provided"
        })
    }
    try{
        const user= TokenAuth.getData(token);
        req.user=user;
        return next();
    }catch(err){
        console.log("expired ",err);
    }
}
export default verifyToken;