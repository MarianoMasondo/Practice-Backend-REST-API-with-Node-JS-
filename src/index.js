const express = require("express");
const { StatusCodes } = require ("http-status-codes");

const approutes = require("./routes")

const app = express();

const port = 3000;

const STATUS = {
    SUCCESS: "OK",
    FAIRLURE: "NO"
}
app.use(express.json())

app.use("/v1, approutes")


app.get("/hello-you", (req, res ) => {
    res.status(StatusCodes.OK)
    res.send("Hello you!");
});

app.post("/add", (req, res) => {
    const data = [];
    const { body } = req;

    if(!body.name) {
        return res.status(StatusCodes.BAD_REQUEST).send({
            status: STATUS.FAIRLURE,
            messagge: "Name is required"
        });
    }
    return res.status(StatusCodes.CREATED).send({
        status: STATUS.SUCCESS,
        messagge: data,
    });
})


app.listen(port, () => {
    console.log(`Server started on http://localhost: ${port}`);
})