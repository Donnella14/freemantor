import express from "express";
import UserController from "../controllers/userController.js";
import Validator from "../middleware/validator.js";
import Datachecker from "../middleware/datachecker.js";

const userRouter= express.Router();
userRouter.post("/signup", Validator.newAccountRules(), Validator.validateInput, Datachecker.validateEmailDuplication, 
 Datachecker.checkAge,
 UserController.signupUser);
userRouter.get("/all", UserController.getAllUsers);
userRouter.get("/:id", UserController.getOneUser);
userRouter.delete("/:id", UserController.deleteUser);
userRouter.patch("/:id", UserController.updateUser);
userRouter.post("/signin", UserController.signinUser);
userRouter.patch("/:id/role", UserController.updateOneUserRole);

export default userRouter;