import express from "express";
import UserController from "../controllers/userController.js";

const userRouter= express.Router();
userRouter.post("/signup", UserController.signupUser);
userRouter.get("/all", UserController.getAllUsers);
userRouter.get("/:id", UserController.getOneUser);
userRouter.delete("/:id", UserController.deleteUser);
userRouter.patch("/:id", UserController.updateUser);

export default userRouter;