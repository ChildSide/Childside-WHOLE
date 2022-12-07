import express from "express";
import { getComplaints } from "../controllers/complaints.js";
const router = express.Router();

router.get("/",getComplaints)

export default router