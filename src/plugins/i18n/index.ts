import en from "./lan/en.json";
import { createI18n } from "vue-i18n";

export default createI18n({
  legacy: false,
  messages: {
    en,
  },
});
