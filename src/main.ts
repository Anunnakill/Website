import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import router from "@/router";
import i18n from "@/plugins/i18n";
import naive from "@/plugins/naive";
import VueAnimXyz from "@animxyz/vue3";
import Directive from "@/plugins/directive";
import GoogleRecaptcha from "@/plugins/recaptcha";

import "atropos/scss";
import "normalize.css";
import "@animxyz/core";
import "@/assets/font/index.scss";
import "cropperjs/dist/cropper.min.css";
import "@/assets/style/global/reset.scss";
import "@/assets/style/global/animate.scss";

createApp(App)
  .use(i18n)
  .use(naive)
  .use(router)
  .use(Directive)
  .use(VueAnimXyz)
  .use(createPinia())
  .use(GoogleRecaptcha)
  .mount("#app");
