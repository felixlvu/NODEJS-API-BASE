import { Router } from 'express';
const router = Router();

// Import des routes
import homeRoutes from './routes/homeRoute.js';
import authRoutes from './routes/authRoute.js';
import protectedRoutes from './routes/protectedRoute.js';

// Chargement des routes de l'API
router.use([
  homeRoutes, 
  authRoutes,
  protectedRoutes
]);

export default router;
