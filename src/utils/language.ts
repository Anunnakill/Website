const readLanguage = () => {
  const local = localStorage.getItem("lan");
  if (local) return local;

  const nav = navigator.language;
  if (nav === "zh-CN") return "zh";

  return "en";
};

export { readLanguage };
