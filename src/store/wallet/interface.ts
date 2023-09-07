import type { WalletSDK } from "wallet-ethers-next";

interface IState {
  connect: WalletSDK;
  auth: { sign_content: string; signature: string };
}

export type { IState };
