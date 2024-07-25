import express from "express";
import {join, login, search} from "../controllers/globalController";
import trendingVideo from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trendingVideo);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;