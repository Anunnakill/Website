import { isApp } from "@/utils";

const terminalEntryFile = () => {
  return isApp() ? import("@/views/app.vue") : import("@/views/desktop.vue");
};

export { terminalEntryFile };
