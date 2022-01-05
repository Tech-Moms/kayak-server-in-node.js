import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();
export const baseController = new UserController();

router.get('/user', baseController.getUsers);
router.post('/user', baseController.createUser);

router.get('/user/:id', baseController.getUserById);
router.patch('/user/:id', baseController.updateUserById);
router.delete('/user/:id', baseController.deleteUserById);

export default router;