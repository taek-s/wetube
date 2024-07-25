import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

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


app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);



app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
})