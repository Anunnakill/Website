import { defineStore } from "pinia";
import { IState } from "./interface";
import { signMessage } from "@/utils";

export const useWallet = defineStore("wallet", {
  state: (): IState => ({
    connect: {} as IState["connect"],
    auth: { sign_content: signMessage(), signature: "" },
  }),

  getters: {},

  actions: {},
});
