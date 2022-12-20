import express from "express";
import { addComplaint, getComplaint } from "../controllers/complaint.js";
const router = express.Router();

router.get("/",getComplaint)
router.post("/",addComplaint)

export default router