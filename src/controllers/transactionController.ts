import { Request, Response } from 'express';
import { HeliusWebhookPayload, Transaction } from '../models/transaction';

export class TransactionController {
  public async handleWebhook(req: Request, res: Response) {
    try {
      const payload = req.body[0] as HeliusWebhookPayload;
      
      // Get the amount from tokenTransfers (using the first transfer if multiple exist)
      const amount = payload.tokenTransfers[0]?.tokenAmount || 0;

      // Create transaction object in requested format
      const transaction: Transaction = {
        amount,
        transaction_hash: payload.signature
      };

      // Console log the transaction
      console.log('New Transaction:', {
        amount: transaction.amount,
        transaction_hash: transaction.transaction_hash,
        timestamp: new Date().toISOString()
      });

      // Send a simple acknowledgment without data
      res.sendStatus(200);
    } catch (error) {
      console.error('Webhook Error:', error);
      res.sendStatus(500);
    }
  }
} 