import { db } from "../connect.js";
import Jwt from "jsonwebtoken";
import moment from "moment";
export const getComplaint = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Token in not valid!")
    Jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        const q = `SELECT p.*, u.id AS userId , name , profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId)`;
        db.query(q, [userInfo.id], (err, data) => {
            if (err) return res.status(500).json(err)
            return res.status(200).json(data);
        });
    });
}
export const addComplaint = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Token in not valid!")
    Jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        // const q = "INSERT INTO complaints (`desc`,`img`,`createdAt`,`userId`) VALUES (?)";
        const q = "INSERT INTO complaints (`pic`,`houseno`,`village`,`ward`,`block`,`subdistrict`,`Landmark`,`State`,`District`,`reportName`,`mobNo`,`email`,`userId`,`createdAt`) VALUES (?)";
        const values= [
            req.body.pic,
            req.body.houseno,
            req.body.village,
            req.body.ward,
            req.body.block,
            req.body.subdistrict,
            req.body.Landmark,
            req.body.State,
            req.body.District,
            req.body.reportName,
            req.body.mobNo,
            req.body.email,
            userInfo.id,
            moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
        ];

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err)
            return res.status(200).json("Post has been created.");
        });
    });
}