import mongoose  from "mongoose";

const Session = new mongoose.Schema({
    title: {type:String,required:[true,"The title is required"]},
    description: String,
    user:{type:mongoose.Schema.ObjectId, ref:"user"},
    mentor:{type:mongoose.Schema.ObjectId, ref:"user"},
    timeToStart:String,
    timeToEnd:String,
    status:{
        type:String,
        enum:["appending","approve","decline"], default:"appending"}

});
const SessionInfo= mongoose.model("session" ,Session);

export default SessionInfo;