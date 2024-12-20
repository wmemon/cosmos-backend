import express from 'express';
import transactionRoutes from './routes/transactionRoutes';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/transactions', transactionRoutes);

export default app; 