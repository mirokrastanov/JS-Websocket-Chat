import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import connectToMongoDB from './db/mongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// Body parsers
app.use(express.urlencoded({ extended: false })); // parse form fields
app.use(express.json()); // parse JSON from incoming requests (req.body)

// TODO: Cookie parsers

// TODO: Auth middleware

// TODO: Routes
app.use('/api/auth', authRoutes);

// TODO: Error handler


// Run Server
app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}...`);
});