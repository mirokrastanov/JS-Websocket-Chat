import express from 'express';
import { getMessages, sendMessage } from '../controllers/message.controller.js';
import userRouteGuard from '../middlewares/userRouteGuard.js';

const router = express.Router();

router.get('/:id', userRouteGuard, getMessages);
router.post('/send/:id', userRouteGuard, sendMessage);

export default router;