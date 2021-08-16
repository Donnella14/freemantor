import { check, validationResult } from "express-validator";

class Validator{

    static validateInput=(req,res,next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            const errorMessage= errors.errors.map((err)=>err.msg);
            return res.status(400).json({
                status:400,
                message:errorMessage
            })
        }
        return next(); 
    }
    static newAccountRules(){
        return[
            check("email","please your email is invalid").isEmail(),
            check("firstName","please your firstname has special character").isAlpha(),
            check("lastName","please your lastname has special character").isAlpha(),
            check("gender","gender is invalid").isIn(['male', 'female']),
            check("phone","phone number is invalid").isMobilePhone(), 
            check("age","age should be kinteger").isInt(),
            check("password","password must be kinteger").isStrongPassword()



        ];
    }
    static checkId(){
        return [
            check("id","this is not a Mongo Id").isMongoId()
        ]
    }
}
export default Validator;