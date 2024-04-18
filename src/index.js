const express = require("express");
// const { StatusCodes } = require ("http-status-codes");

const appRoutes = require("./routes");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/v1", appRoutes);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
