import express from "express";
import UserController from "../controllers/userController.js";
import Validator from "../middleware/validator.js";
import Datachecker from "../middleware/datachecker.js";
import verifyAccess from "../middleware/verifyAccess.js";
import verifyToken from "../middleware/verifyToken.js";
import bcrypt from "bcrypt"

const userRouter= express.Router();
userRouter.post("/signup", Validator.newAccountRules(), Validator.validateInput, Datachecker.validateEmailDuplication, 
 Datachecker.checkAge,
 UserController.signupUser);
userRouter.get("/all", UserController.getAllUsers);
userRouter.get("/all/mentors",verifyToken,verifyAccess("user"), UserController.getAllMentors);
userRouter.get("/:id", Validator.checkId(), Validator.validateInput, UserController.getOneUser);
userRouter.delete("/:id",Validator.checkId(), Validator.validateInput, UserController.deleteUser);
userRouter.patch("/:id",Validator.checkId(), Validator.validateInput, UserController.updateUser);
userRouter.post("/signin", UserController.signinUser);
userRouter.patch("/:id/role",verifyToken,verifyAccess("admin"),UserController.updateOneUserRole);

export default userRouter;