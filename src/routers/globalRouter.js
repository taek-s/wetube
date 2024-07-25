import express from "express";

const globalRouter = express.Router();
const mainHandler = (req, res) => res.send("Main");
const joinHandler = (req, res) => res.send("Join");
globalRouter.get("/", mainHandler);
globalRouter.get("/join", joinHandler);

export default globalRouter;