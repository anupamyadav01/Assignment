import express from "express";
import ensureAuthenticated from "../middlewares/auth.js";

const homeRoutes = express.Router();

homeRoutes.get("/", ensureAuthenticated, (req, res) => {
  res.json({ message: "Hello from backend API to Homepage." });
});

export default homeRoutes;
