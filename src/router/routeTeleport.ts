import { isApp } from "@/utils";

const homeEntryFile = () => {
  return isApp() ? import("@/views/app/home.vue") : import("@/views/desktop/home.vue");
};

export { homeEntryFile };
