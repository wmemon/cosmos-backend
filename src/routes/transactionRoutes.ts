import { Router } from 'express';
import { TransactionController } from '../controllers/transactionController';

const router = Router();
const transactionController = new TransactionController();

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

router.post('/webhook', transactionController.handleWebhook);

export default router; 