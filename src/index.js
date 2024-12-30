  

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";

import express from "express";
import dotenv from "dotenv";

dotenv.config();
console.log("MONGODB_URI:", process.env.MONGODB_URI); // Debug log

const app = express();

import connectDB from "./db/dbconnect.js";
connectDB();











