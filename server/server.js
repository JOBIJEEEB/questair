import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json())

 const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"",
    database:"crud"
 })

 //GET DATA
app.get('/',(req,res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, result)=>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

// TO CHECK IF WORKING
app.listen(5174, ()=>{
    console.log("Listening");
})