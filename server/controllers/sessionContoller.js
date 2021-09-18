import SessionInfo from "../models/session.js";

class SessionController{
    static request = async(req,res)=>{
        req.body.user=req.user.id;
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
    static updateSessionStatus= async(req,res)=>{
        const finf= await SessionInfo.findById(req.params.id);
        let status;
        if (finf.status=="decline"){
            status="approve";
        }
        else{
            status="approve";
        }
        const update=await SessionInfo.findByIdAndUpdate(req.params.id,{status:status});
        if(!update){
            return res.status(404).json({
                status:404,
                message:"not changed"
            })
        }
        const updated= await SessionInfo.findById(req.params.id);
        return res.status(200).json({
            status:200,
            message:"success",
            data:updated
        })

    }
    static updateSessionStatusDecl= async(req,res)=>{
        const finf= await SessionInfo.findById(req.params.id);
        let status;
        if (finf.status=="approve"){
            status="decline";
        }
        else{
            status="decline";
        }
        const update=await SessionInfo.findByIdAndUpdate(req.params.id,{status:status});
        if(!update){
            return res.status(404).json({
                status:404,
                message:"not changed"
            })
        }
        const updated= await SessionInfo.findById(req.params.id);
        return res.status(200).json({
            status:200,
            message:"success",
            data:updated
        })

    }
    static updateSession = async(req,res)=>{
        const update = await SessionInfo.findByIdAndUpdate(req.params.id,req.body);
        if(!update){
            return res.status(400).json({
                status:400,
                message:"failed to update"
            })
        
        }
        const updated = await SessionInfo.findById(req.params.id);
        return res.status(200).json({
            status:200,
            message:"successfully updated",
            data:updated
        })
    }
    static getOne = async(req,res)=>{
        const session = await SessionInfo.findById(req.params.id);
        if(!session){
            return res.status(400).json({
                status:400,
                message:"failed to get that user"
            })
        
        }
        return res.status(200).json({
            status:200,
            message:"success to get the session",
            data:session
        })
    }
    static deleteAsession = async(req,res)=>{
        const session = await SessionInfo.findByIdAndDelete(req.params.id);
        if(!session){
            return res.status(400).json({
                status:400,
                message:"failed to delete"
            })
        
        }
       //// const deleted = await SessionInfo.find();
        return res.status(200).json({
            status:200,
            message:"Success to delete this session.",
            data:session
            //data:deleted
        })
    }
    static getAllSessionsOne = async(req,res)=>{
        const sessions = await SessionInfo.find({user:req.user.id});
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