import { Router } from 'express';
import passport from 'passport';
import { register, login } from '../controllers/authController.js';

const router = Router();

router.post('/register', register);
router.post('/login', passport.authenticate('local', { session: false }), login);

export default router;
