import express from "express";
import authRoutes from "./routes/authRoutes.js";
const app = express();
import cors from "cors";
import dotenv from "dotenv";
import { connectToDB } from "./services/connectToDB.js";
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

connectToDB();

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
