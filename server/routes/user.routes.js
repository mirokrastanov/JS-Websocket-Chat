import express from 'express';
import userRouteGuard from '../middlewares/userRouteGuard.js';
import { getUsersForSidebar } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', userRouteGuard, getUsersForSidebar);

export default router;