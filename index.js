const express = require("express");
const { StatusCodes } = require ("http-status-codes");

const app = express();
const port = 3000;

app.get("/hello-you", (req, res ) => {
    res.status(StatusCodes.OK)
    res.send("Hello you!");
});

app.listen(port, () => {
    console.log(`Server started on http://localhost: ${port}`);
})