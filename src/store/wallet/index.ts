import { defineStore } from "pinia";
import { JsonRpcSigner } from "ethers";
import { randomString } from "@/utils/random";

interface IWeb3Provider {
  request: (request: { method: string; params?: Array<any> }) => Promise<any>;
  on: (event: string, callback: (params?: any) => void) => void;
  isMetaMask: boolean;
}

interface IWalletSDK {
  web3Provider: IWeb3Provider;
  signer: JsonRpcSigner;
  address: string;
}

export const useWallet = defineStore("wallet", {
  state: () => ({
    connect: {} as IWalletSDK,
    auth: { sign_content: randomString(), signature: "" },
  }),

  getters: {},

  actions: {},
});
