import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './db/db.js';
import authRoute from "./routes/auth.route.js";
import carRoute from "./routes/car.route.js";
import cors from "cors"

const app = express();
app.use(express.json());  //  middleware for all json to covert in object
dotenv.config();
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

connectDB();

app.use("/api", authRoute);
app.use("/api", carRoute);

// app listen
app.listen(process.env.PORT, () => {
    console.log(`server on running ${process.env.PORT}`);
});

export default app;