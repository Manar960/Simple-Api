import express, { Request, Response } from "express";
import os from 'os';
const app = express();
const port = 3000;

app.get("/api/hello", (req: Request, res: Response) => {
  const name = req.query.name;
  res.send({ greeting: `Hello, ${name || "world"}!` });
});

app.get("/info", (req: Request, res: Response) => {
  const clientAddress = req.ip;
  const hostName = os.hostname();
  const requestTime = new Date().toISOString();

  res.json({
    time: requestTime,
    client_address: clientAddress,
    host_name: hostName,
    headers: req.headers,
  });
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
