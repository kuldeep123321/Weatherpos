import express from "express";
const Health=express.Router();
import pool from "../../Database/db.js";
Health.get("/data",async (req,res)=>{
    try{
        
        const data=await pool.query(`select sum(pushups) as totalpushups,sum(meditation_minutes) as totalmeditation,sum(squats) as totalsquats from kuldeep_health`);
        // const data=await pool.query(`select * from kuldeep_health`);
        res.json(data.rows);
    } catch(err){
        console.log("bhai data fetch nahi ho rha",err.message);
    }
});
Health.post("/add-data",async (req,res)=>{
    try{
        const { date, pushups, squats, meditation_minutes, study_minutes } = req.body;
        const data=await pool.query(
            "INSERT INTO kuldeep_health (date, pushups, squats, meditation_minutes, study_minutes) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [date, pushups, squats, meditation_minutes, study_minutes]
        );
        res.status(200).json({ message: "Sahi hai bhai, data save ho gaya!", result: data.rows[0] });
    } catch(err){
        console.log("bhai data fetch nahi ho rha",err.message);
        res.status(500).json({ error: "Backend phat gaya bhai" });
    }
});
export default Health;