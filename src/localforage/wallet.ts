import localforage from "localforage";

const localWallet = localforage.createInstance({
  name: "muaverse",
  storeName: "wallet",
});

const removeLocalWallet = async () => {
  return await localWallet.dropInstance({ name: "muaverse", storeName: "wallet" });
};

export { removeLocalWallet };
