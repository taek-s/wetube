import express from "express";

const videoRouter = express.Router();
const videoMainHandler = (req, res) => res.send("Videos Main");
const videoEditHandler = (req, res) => res.send("Videos Edit");
videoRouter.get("/", videoMainHandler);
videoRouter.get("/edit", videoEditHandler);

export default videoRouter;