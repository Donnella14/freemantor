import UserInfo from "../models/userModel.js";
import TokenAuth from "../helpers/TokenAuth.js";

class UserController{
    static signinUser = async(req,res)=>{
        const {email,password} = req.body;
        const user= await UserInfo.findOne({email: email, password: password});
        if (!user){
            return res.status(400).json({
                status:400,
                message:"not found"
            })
        }
        const token = TokenAuth.tokenGenarator({
            id:user._id,
            email:user.email,
            status:user.status,
            role:user.role
        }) 
        return res.status(200).json({
            status:200,
            message:"sgnin successfully",
            token:token,
            data:user
        })


    }

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
            const updated = await UserInfo.findById(req.params.id);
            return res.status(200).json({
                status:200,
                message:"success to update",
                //data:update
                data:updated
            })
        }
        static updateOneUserRole = async (req,res)=>{
            const data= await UserInfo.findById(req.params.id);
            let role;
            if (data.role=="user"){
                role="mentor";
            }
            else(role="user");
            const user= await UserInfo.findByIdAndUpdate(req.params.id, {role:role});
            if(!user){
                return res.status(404).json({
                    status:404,
                    message:"not found"
                })
            }
            const updateUser = await UserInfo.findById(req.params.id);
            return res.status(200).json({
                status:200,
                message:"successfully changed",
                data:updateUser
            })
        } 
}


export default UserController;