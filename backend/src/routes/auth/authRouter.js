import express from 'express';
import verifyEmailController from '../../controllers/auth/verifyEmailController.js';

const authRouter = express.Router();

authRouter.get('/auth/verify', verifyEmailController);

export default authRouter;