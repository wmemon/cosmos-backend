import { Router } from 'express';
import { TransactionController } from '../controllers/transactionController';

const router = Router();
const transactionController = new TransactionController();

router.post('/webhook', transactionController.handleWebhook);

export default router; 