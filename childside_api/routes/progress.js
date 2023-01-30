import express from "express";
import { addProgress, deleteProgress, getProgress } from "../controllers/progress.js";
const router = express.Router();

router.get("/", getProgress)
router.post("/", addProgress)
router.delete("/", deleteProgress)

export default router