import express from 'express';
import transactionRoutes from './routes/transactionRoutes';

const app = express();

// Middleware
app.use(express.json());

// Add CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  
  // Handle OPTIONS method
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Root route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});

// Routes
app.use('/api/transactions', transactionRoutes);

export default app; 