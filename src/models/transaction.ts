export interface Transaction {
  amount: number;
  transaction_hash: string;
}

export interface TokenBalanceChange {
  mint: string;
  rawTokenAmount: {
    decimals: number;
    tokenAmount: string;
  };
  tokenAccount: string;
  userAccount: string;
}

export interface AccountData {
  account: string;
  nativeBalanceChange: number;
  tokenBalanceChanges: TokenBalanceChange[];
}

export interface TokenTransfer {
  fromTokenAccount: string;
  fromUserAccount: string;
  mint: string;
  toTokenAccount: string;
  toUserAccount: string;
  tokenAmount: number;
  tokenStandard: string;
}

export interface HeliusWebhookPayload {
  accountData: AccountData[];
  description: string;
  events: Record<string, unknown>;
  fee: number;
  feePayer: string;
  signature: string;
  slot: number;
  source: string;
  timestamp: number;
  tokenTransfers: TokenTransfer[];
  type: string;
} 