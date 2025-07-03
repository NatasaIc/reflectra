import express from 'express';
import { userController } from '../controllers/userController';
import { authProtect } from '../middleware/auth';

const router = express.Router();

router.route('/').get(userController.getUsers);

router.route('/:id').get(userController.getUserById).delete(userController.deleteUserById);

router.route('/profile').get(authProtect, userController.getUserProfile).patch(authProtect, userController.updateProfile);

export default router;
