import express from "express";
import {userEditHandler, userDeleteHandler} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", userEditHandler);
userRouter.get("/delete", userDeleteHandler);

export default userRouter;