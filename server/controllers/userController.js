import UserInfo from "../models/userModel.js";


class UserController{
    static signupUser = async(req,res)=>{
        const user = await UserInfo.create(req.body);
        if(!user){
            return res.status(400).json({
                status:400,
                message:"failed to register"
            })
        
        }
        return res.status(200).json({
            status:200,
            message:"success",
            data:user
        })
    }
        static getAllUsers = async(req,res)=>{
            const users = await UserInfo.find();
            if(!users){
                return res.status(400).json({
                    status:400,
                    message:"failed to get all users"
                })
            
            }
            return res.status(200).json({
                status:200,
                message:"success",
                data:users
            })
        }
        static getOneUser = async(req,res)=>{
            const userNum = await UserInfo.findById(req.params.id);
            if(!userNum){
                return res.status(400).json({
                    status:400,
                    message:"failed to get that user"
                })
            
            }
            return res.status(200).json({
                status:200,
                message:"success to get the user",
                data:userNum
            })
        }
        static deleteUser = async(req,res)=>{
            const userNu = await UserInfo.findByIdAndDelete(req.params.id);
            if(!userNu){
                return res.status(400).json({
                    status:400,
                    message:"failed to delete"
                })
            
            }
            const deleted = await UserInfo.find();
            return res.status(200).json({
                status:200,
                message:"Success to delete the user. Here is the new data.",
                data:userNu,
                data:deleted
            })
        }
        static updateUser = async(req,res)=>{
            const update = await UserInfo.findByIdAndUpdate(req.params.id,req.body);
            if(!update){
                return res.status(400).json({
                    status:400,
                    message:"failed to update"
                })
            
            }
           // const updated = await UserInfo.find();
            return res.status(200).json({
                status:200,
                message:"success to update",
                data:update
                //data:updated
            })
        }
}


export default UserController;