import localforage from "localforage";

const localConfig = localforage.createInstance({
  name: "muaverse",
  storeName: "config",
});

const removeLocalConfig = async () => {
  return await localConfig.dropInstance({ name: "muaverse", storeName: "config" });
};

export { removeLocalConfig };
