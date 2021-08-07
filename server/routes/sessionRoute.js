import express from "express";
import SessionController from "../controllers/sessionContoller.js";

const sessionRouter= express.Router();
sessionRouter.post("/signup",SessionController.signup);
sessionRouter.get("/all", SessionController.getAll);
sessionRouter.patch("/:id/status", SessionController.updateSessionStatus);
sessionRouter.patch("/decline/:id/status", SessionController.updateSessionStatusDecl);
sessionRouter.patch("/:id", SessionController.updateSession);
sessionRouter.get("/:id", SessionController.getOne);
sessionRouter.delete("/:id", SessionController.deleteAsession);
export default sessionRouter;