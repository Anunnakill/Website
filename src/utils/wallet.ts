import { toRaw } from "vue";
import ENV from "@/assets/env";
import { message } from "@/utils";
import { encrypt } from "./crypto";
import { useWallet } from "@/store";

const readAuth = async () => {
  const wallet = useWallet();
  let signature = wallet.auth.signature;
  let sign_content = wallet.auth.sign_content;
  if (signature) return { signature, sign_content };
  let walletSignerInstance = toRaw(wallet.connect.signer);
  if (!walletSignerInstance) throw message.warning(ENV.tooltip);
  signature = encrypt(await walletSignerInstance.signMessage(sign_content));
  const params = { signature, sign_content };
  wallet.auth.signature = signature;
  return params;
};

export { readAuth };
