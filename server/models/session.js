import mongoose  from "mongoose";

const Session = new mongoose.Schema({
    title: String,
    description: String,
    user:String,
    mentor:String,
    timeToStart:String,
    timeToEnd:String,
    status:{
        type:String,
        enum:["appending","approve","decline"], default:"appending"}

});
const SessionInfo= mongoose.model("session" ,Session);

export default SessionInfo;