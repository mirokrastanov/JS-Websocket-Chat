import express from 'express';
import { sendMessage } from '../controllers/message.controller.js';
import userRouteGuard from '../middlewares/userRouteGuard.js';

const router = express.Router();

router.post('/send/:id', userRouteGuard, sendMessage);

export default router;