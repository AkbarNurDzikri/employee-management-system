import express from 'express';
import verifyEmailController from '../../controllers/auth/verifyEmailController.js';
import login from '../../controllers/auth/loginController.js';

const authRouter = express.Router();

authRouter.get('/auth/verify', verifyEmailController);
authRouter.post('/auth/login', login);

export default authRouter;