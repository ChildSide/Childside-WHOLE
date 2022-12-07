import { db } from "../connect.js"

export const getComplaints = (req,res)=>{
    const q = `SELECT p.*,u.id AS userID,name,profilePic FROM complaints AS p JOIN users AS u ON (u.id = p.userID)`
    db.query(q,(err,data)=>{
        if(err) return res.status(500).json(err)
        return res.status(200).json(data);
    });
}