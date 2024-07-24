import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

const loggerMiddle = morgan("dev");
const intercepter = (req, res, next) => {
    const url = req.url;
    if (url === '/admin') {
        res.send("<h1 style='color:red;'>Not Allowed</h1>");
        console.log("reject /admin");
    } else {
        next();
    }
}

const responseHandler = (req, res) => {
    res.send("<h1>Wetube Main Page</h1>");
}

app.use(loggerMiddle);
app.use(intercepter);
app.get('/', responseHandler)


app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
})