import SessionInfo from "../models/session.js";

class SessionController{
    static signup = async(req,res)=>{
        const session = await SessionInfo.create(req.body);
        if(!session){
            return res.status(400).json({
                status:400,
                message:"failed to register"
            })
        
        }
        return res.status(200).json({
            status:200,
            message:"success",
            data:session
        })
    }
    static getAll = async(req,res)=>{
        const sessions = await SessionInfo.find();
        if(!sessions ){
            return res.status(400).json({
                status:400,
                message:"failed to get all "
            })
        
        }
        return res.status(200).json({
            status:200,
            message:"success",
            data:sessions 
        })
    }
}

export default SessionController;