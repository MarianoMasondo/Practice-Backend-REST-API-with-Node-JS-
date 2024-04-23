import express from "express";
import helmet from "helmet";
import cors from "cors"

import

const app = express();
const port = 4000;

app.use(express.json());

app.use("/v1", appRoutes);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
