import express from 'express';
import { validateSignup, validateRequest } from '../middleware/validateSignup';
import { userController } from '../controllers/userController';

const router = express.Router();

router.post('/signup', validateSignup, validateRequest, userController.signUp);
router.post('/login', userController.login);

export default router;
