import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
class TokenAuth{
    static tokenGenarator(data){
        const token = jwt.sign(data,process.env.JWTKEY,{expiresIn:"1d"});
        return token;
    }
    static getData(token){
        const data= jwt.verify(token,process.env.JWTKEY);
        return data;
    }
}
export default TokenAuth;