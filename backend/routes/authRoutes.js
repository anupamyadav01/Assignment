import express from "express";
import {
  loginUser,
  registerUser,
  verifyToken,
} from "../controller/authController.js";
import ensureAuthenticated from "../middlewares/auth.js";

const authRoutes = express.Router();

authRoutes.post("/register", registerUser);
authRoutes.post("/login", loginUser);
authRoutes.get("/verify", ensureAuthenticated, verifyToken);

export default authRoutes;
