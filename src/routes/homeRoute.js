import { Router } from "express";
const homeRoutes = Router();

homeRoutes.get("/", (req, res) => {
  res.send("Hello World!");
});

export default homeRoutes;
