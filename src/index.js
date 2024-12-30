  

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";

import express from "express";
import dotenv from "dotenv";

dotenv.config();
console.log("MONGODB_URI:", process.env.MONGODB_URI); // Debug log

const app = express();

import connectDB from "./db/dbconnect.js";
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port ${process.env.PORT}`);
    })
})
.catch((error)=>console.error("ERROR:",error.message || error))











