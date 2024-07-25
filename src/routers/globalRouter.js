import express from "express";
import {homeHandler, joinHandler, loginHandler, searchHandler} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", homeHandler);
globalRouter.get("/join", joinHandler);
globalRouter.get("/login", loginHandler);
globalRouter.get("/search", searchHandler);

export default globalRouter;