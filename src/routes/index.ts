import { Router } from 'express';
import characterRoute from './character.route';

const router = Router();

// Agregar todas las rutas
router.use('/character', characterRoute);

export default router;