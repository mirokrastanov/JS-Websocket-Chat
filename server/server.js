import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Server root.');
});

app.get('/api/auth/signup', (req, res) => {
    console.log('signup');
});

app.get('/api/auth/login', (req, res) => {
    console.log('login');
});

app.get('/api/auth/logout', (req, res) => {
    console.log('logout');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));