const express = require("express");
const { StatusCodes } = require("http-status-codes");

const router = express.Router();
const port = 3000;

const STATUS = {
  status: "OK",
  failure: "NO",
};

router.get("/hello-word", (req, res) => {
  res.status(StatusCodes.OK);
  res.send("Hello word!");
});

router.post("/add", (req, res) => {
  const data = [];
  const { body } = req;

  if (!body.name) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      status: STATUS.failure,
      message: "Name is required",
    });
  }
  return res.status(StatusCodes.CREATED).send({
    status: STATUS.success,
    message: data,
  });
});

export default router;
