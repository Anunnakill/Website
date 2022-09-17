import { defineStore } from "pinia";
import { randomString } from "@/utils/random";

interface Connect {
  wallet: any;
  account: string;
  signer: { signMessage: (content: string) => Promise<string> };

  [key: string]: any;

  login(): Promise<boolean>;
  logout(): Promise<any>;
  onAccountsChanged(callBack: Function): void;
  onChainChanged(callBack: Function): void;
}

export const useWallet = defineStore("wallet", {
  state: () => ({
    connect: {} as Connect,

    auth: {
      signature: "",
      sign_content: randomString(),
    },
  }),

  getters: {},

  actions: {},
});
