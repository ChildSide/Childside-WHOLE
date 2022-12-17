import express from "express";
import { getProgress } from "../controllers/progress.js";
const router = express.Router();

router.get('/',getProgress)

export default router