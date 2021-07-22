import express from "express";
/////import mongoose from "mongoose";
/////////import dotenv from "dotenv";

////////dotenv.config({path:'./.env'});

const app = express();
//const databaseUrl=process.env.DATABASE;
/////mongoose.connect(databaseUrl,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false}).then(()=>console.log("Databse connected succesfully")); 
//port:4040
app.listen(4040, ()=>{
    ///console.log(databaseUrl);
    console.log('server is running on port 4040');
})


export default app;