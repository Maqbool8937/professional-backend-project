
// 1st method for connecting to mo0ngoDB & this is Clean coding method:
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("MONGODB CONNECTED.......");
  } catch (error) {
    console.error("MONGODB connection error:", error.message || error);
    process.exit(1);
  }

  // Listen for runtime connection errors
  mongoose.connection.on("error", (err) => {
    console.error("MONGODB runtime connection FAILED:", err.message || err);
  });
};

export default connectDB;


// 2nd method for connecting to MongoDB
// IIFE FUNCTION IN JAVASCRIPT:
// (async () => {
//   try {
//     // Validate environment variables
//     if (!process.env.MONGODB_URI || !process.env.PORT) {
//       throw new Error("Environment variables MONGODB_URI or PORT are missing.");
//     }

//     // Connect to MongoDB
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB successfully.");

//     // Start the Express server
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR:", error.message || error);
//     process.exit(1); // Exit the process with an error code
//   }
// })();