import { Request, Response } from "express";
import os from "os";

export const getHello = (req: Request, res: Response) => {
  const name = req.query.name;
  res.send({ greeting: `Hello, ${name || "world"}!` });
};

export const getResponseInfo = (req: Request, res: Response) => {
  const clientAddress = req.ip;
  const hostName = os.hostname();
  const requestTime = new Date().toISOString();

  res.json({
    time: requestTime,
    client_address: clientAddress,
    host_name: hostName,
    headers: req.headers,
  });
};
