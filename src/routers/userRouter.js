import express from "express";

const userRouter = express.Router();
const userMainHandler = (req, res) => res.send("User Main");
const userEditHandler = (req, res) => res.send("User Edit");
userRouter.get("/", userMainHandler);
userRouter.get("/edit", userEditHandler);

export default userRouter;