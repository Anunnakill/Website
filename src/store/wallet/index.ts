import { defineStore } from "pinia";
import { signMessage } from "@/utils";
import { JsonRpcSigner, Eip1193Provider } from "ethers";

interface IWalletSDK {
  address: string;
  signer: JsonRpcSigner;
  web3Provider: Eip1193Provider;
}

export const useWallet = defineStore("wallet", {
  state: () => ({
    connect: {} as IWalletSDK,
    auth: { sign_content: signMessage(), signature: "" },
  }),

  getters: {},

  actions: {},
});
