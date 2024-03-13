import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import connectToMongoDB from './db/mongoDB.js';
import { app, server } from './socket/socket.js';

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();

// Body parsers
app.use(express.urlencoded({ extended: false })); // parse form fields
app.use(express.json()); // parse JSON from incoming requests (req.body)

// TODO: Cookie parsers
app.use(cookieParser());

// TODO: Auth middleware

// TODO: Routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

// TODO: Error handler

// pre-deploy middleware
app.use(express.static(path.join(__dirname, '/client/dist')));

// wild-card routes (pre-deploy)
// serve client index for non-server routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// Run Server
server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}...`);
});