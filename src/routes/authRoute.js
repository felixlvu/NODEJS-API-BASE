import { Router } from "express";
const authRoutes = Router();

authRoutes.get("/auth", (req, res) => {
  console.log("lecture process.env.JWT_SECRET", process.env.JWT_SECRET);
  res.send("api d'authentification");
});

export default authRoutes;
