import express from "express";
import {videoWatchHandler, videoEditHandler, videoDeleteHandler, videoCommentHandler, videoCommentDeleteHandler} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/watch", videoWatchHandler);
videoRouter.get("/edit", videoEditHandler);
videoRouter.get("/delete", videoDeleteHandler);
videoRouter.get("/comments", videoCommentHandler);
videoRouter.get("/comments/delete", videoCommentDeleteHandler);

export default videoRouter;