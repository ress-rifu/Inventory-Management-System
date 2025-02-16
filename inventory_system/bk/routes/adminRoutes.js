import { Router } from 'express';
import passport from 'passport';
import { getAllEmployees, createEmployee } from '../controllers/adminController.js';
import { requireRole } from '../middleware/roleMiddleware.js';

const router = Router();

router.get('/employees', passport.authenticate('jwt', { session: false }), requireRole('admin'), getAllEmployees);
router.post('/employees', passport.authenticate('jwt', { session: false }), requireRole('admin'), createEmployee);

export default router;
