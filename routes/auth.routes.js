import { Router } from 'express';
import {logInController, registerController, sendOtpController} from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post('/send-otp', sendOtpController);
authRouter.post('/register', registerController);
authRouter.post('/login', logInController);
authRouter.post('/logout-all', logInController);
authRouter.post('/forgot-password', logInController);

export default authRouter;