import { isApp } from "@/utils";

const hallEntryFile = () => {
  return isApp() ? import("@/views/app/hall.vue") : import("@/views/desktop/hall.vue");
};

export { hallEntryFile };
