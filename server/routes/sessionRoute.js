import express from "express";
import SessionController from "../controllers/sessionContoller.js";

const sessionRouter= express.Router();
sessionRouter.post("/signup",SessionController.signup);
sessionRouter.get("/all", SessionController.getAll);
export default sessionRouter;