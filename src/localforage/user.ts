import localforage from "localforage";

const localUser = localforage.createInstance({
  name: "muaverse",
  storeName: "user",
});

const removeLocalUser = async () => {
  return await localUser.dropInstance({ name: "muaverse", storeName: "user" });
};

export { removeLocalUser };
