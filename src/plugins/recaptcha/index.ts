import { App } from "vue";
import { VueReCaptcha } from "vue-recaptcha-v3";
import ENV from "@/assets/env";

const install = (app: App) => {
  app.use(VueReCaptcha, { siteKey: ENV.RECAPTCHA_SITE_KEY, loaderOptions: { autoHideBadge: true } });
};

export default install;
