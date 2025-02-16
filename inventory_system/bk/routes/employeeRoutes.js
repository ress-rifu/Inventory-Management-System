import { Router } from 'express';
import passport from 'passport';
import { processBilling } from '../controllers/employeeController.js';
import { requireRole } from '../middleware/roleMiddleware.js';

const router = Router();

router.post('/billing', passport.authenticate('jwt', { session: false }), requireRole('employee'), processBilling);

export default router;
