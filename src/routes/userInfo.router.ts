import express from "express";
import { getHello, getResponseInfo } from "../controller/userInfo.controller";

const router = express.Router();

router.get("/hello", getHello);
router.get("/info", getResponseInfo);

export default router;
