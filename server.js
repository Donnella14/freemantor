import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./server/routes/userRoute.js";
import bodyParser from "body-parser";
import sessionRouter from "./server/routes/sessionRoute.js";

dotenv.config({path:'./.env'});

const app = express();
app.use(bodyParser.json());

app.use("/freemantor/v1/user", userRouter);
app.use("/freemantor/v1/session", sessionRouter);

app.use('/',(req,res)=>{
    res.status(404).send({
    status:404,
    message:"this routes doesn't exist"
    })
});


const databaseUrl=process.env.DATABASE;
mongoose.connect(databaseUrl,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false}).then(()=>console.log("Database connected succesfully")); 
//port:4040
const port= process.env.PORT;
app.listen(port, ()=>{
 

    console.log(databaseUrl);
    console.log(`server is running on port ${port}`);

})


export default app;