import express from "express";
import cors from "cors"
const app = express()
import userRoutes from "./routes/users.js"
import complaintRoutes from "./routes/complaints.js"
import progressRoutes from "./routes/progress.js"
import commentRoutes from "./routes/comments.js"
import authRoutes from "./routes/auth.js" 
import cookieParser from "cookie-parser";

app.use((req,res,next)=>{
    // res.header("Access-Control-Allow-Origin","http://localhost:3000")
    res.header("Access-Control-Allow-Credentials",true)
    next()
})
app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000",
}));
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/complaint",complaintRoutes)
app.use("/api/comment",commentRoutes)
app.use("/api/progress",progressRoutes)

app.listen(8800,()=>{
    console.log("workingg");
})