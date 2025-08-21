import express from 'express';
import SetupRoutes from './routes/index.js';
import connectDatabase from './database/connectDb.js';

const app = express();

SetupRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDatabase();
    console.log(`\n✅ Server is running on port:${PORT}`);
});
