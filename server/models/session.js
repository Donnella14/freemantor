import mongoose  from "mongoose";

const Session = new mongoose.Schema({
    title: {type:String,required:[true,"The title is required"]},
    description: String,
    user:{type:mongoose.Schema.ObjectId, ref:"User"},
    mentor:{type:mongoose.Schema.ObjectId, ref:"User"},
    timeToStart:Date,
    timeToEnd:Date,
    status:{
        type:String,
        enum:["appending","approve","decline"], default:"appending"}

});
Session.pre(/^find/, function(next){
    this.populate({
        path:"user",
        select:"firstName lastName email phone gender"
    }).populate({
        path:"mentor",
        select:"firstName lastName email phone gender"
    });
    next();
})
const SessionInfo= mongoose.model("session" ,Session);

export default SessionInfo;