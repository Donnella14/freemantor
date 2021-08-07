import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
class TokenAuth{
    static tokenGenarator(data){
        const token = jwt.sign(data,process.env.JWTKEY,{expiresIn:"1d"});
        return token;
    }
}
export default TokenAuth;