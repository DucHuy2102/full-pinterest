import express from 'express';
import SetupRoutes from './routes/index.js';
import connectDatabase from './database/connectDb.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(cookieParser());

SetupRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDatabase();
    console.log(`\n✅ Server is running on port:${PORT}`);
});
