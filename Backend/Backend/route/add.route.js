import express from "express";
import { login } from "../controller/add.controller.js";
const router = express.Router();

router.post("/", login);

export default router;