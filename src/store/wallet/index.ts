import { defineStore } from "pinia";
import { signMessage } from "@/utils";
import type { WalletSDK } from "wallet-ethers-next";

export const useWallet = defineStore("wallet", {
  state: () => ({
    connect: {} as WalletSDK,
    auth: { sign_content: signMessage(), signature: "" },
  }),

  getters: {},

  actions: {},
});
