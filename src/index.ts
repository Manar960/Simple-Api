import express from "express";
import router from "./routes/userInfo.router";

const app = express();
const port = 3000;

app.use(router);

const server = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export { app, server };
