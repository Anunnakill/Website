import localforage from "localforage";

const localSystem = localforage.createInstance({
  name: "muaverse",
  storeName: "system",
});

const removeLocalSystem = async () => {
  return await localSystem.dropInstance({ name: "muaverse", storeName: "system" });
};

export { removeLocalSystem };
