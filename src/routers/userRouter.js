import express from "express";
import {userLogin, userLogout, userEdit, userDelete} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:userId", userLogin);
userRouter.get("/logout", userLogout);
userRouter.get("/edit", userEdit);
userRouter.get("/delete", userDelete);

export default userRouter;