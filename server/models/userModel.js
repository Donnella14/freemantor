import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName:{type:String,
    required:[true,"your firstname is required"]},
    lastName: {type:String,
        required:[true,"your lastname is required"]},
    email:{type:String,
    unique:true},
    password:{type:String,
        default:"1234"},
    phone:{type:String, required:[true,"your phonenumber is required"]},
    gender:{type:String,enum:["male","female"]},
    age:Number

});
const UserInfo = mongoose.model('User', UserSchema);

export default UserInfo;