import UserInfo from "../models/userModel.js";

class Datachecker{
    static validateEmailDuplication = async(req,res,next)=>{
        const email = await UserInfo.findOne({email:req.body.email});
        if(! email){
            return next();
        
        }
        return res.status(404).json({
            status:404,
            message:"email already exist"
        })
    }
    static checkAge = async(req,res,next)=>{
       // const email = await UserInfo.findOne({email:req.body.email});
        if(req.body.age <18){
            return res.status(404).json({
                status:404,
                message:"you are not allowed"
            })
        } 
        return next();
        
    }
}
export default Datachecker;