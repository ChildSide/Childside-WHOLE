import express from "express";
import { getComplaints } from "../controllers/complaint.js";
const router = express.Router();

router.get("/",getComplaints)

export default router