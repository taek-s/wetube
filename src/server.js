import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

// Logger
const loggerMiddle = morgan("dev");

// 관리용 계정용 인터셉터
const intercepter = (req, res, next) => {
    const url = req.url;
    if (url === '/admin') {
        res.send("<h1 style='color:red;'>Not Allowed</h1>");
        console.log("reject /admin");
    } else {
        next();
    }
}

app.use(loggerMiddle);
app.use(intercepter);


// 글로벌 라우터
const globalRouter = express.Router();
const mainHandler = (req, res) => res.send("Main");
const joinHandler = (req, res) => res.send("Join");
globalRouter.get("/", mainHandler);
globalRouter.get("/join", joinHandler);

// 유저 라우터
const userRouter = express.Router();
const userMainHandler = (req, res) => res.send("User Main");
const userEditHandler = (req, res) => res.send("User Edit");
userRouter.get("/", userMainHandler);
userRouter.get("/edit", userEditHandler);

// 비디오 라우터
const videoRouter = express.Router();
const videoMainHandler = (req, res) => res.send("Videos Main");
const videoEditHandler = (req, res) => res.send("Videos Edit");
videoRouter.get("/", videoMainHandler);
videoRouter.get("/edit", videoEditHandler);



app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);



app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
})