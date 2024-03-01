import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import connectToMongoDB from './db/mongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use('/api/auth', authRoutes);
app.use(express.json()); // parse JSON from incoming requests (req.body)

// app.get('/', (req, res) => {
//     res.send('Server root.');
// });

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}...`);
});