import en from "./lan/en.json";
import { createI18n } from "vue-i18n";
import { readLanguage } from "@/utils/language";

export default createI18n({
  locale: readLanguage(),
  legacy: false,
  messages: {
    en,
  },
});
