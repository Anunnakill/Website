import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import i18n from "./plugins/i18n";
import naive from "./plugins/naive";
import { createPinia } from "pinia";
import VueAnimXyz from "@animxyz/vue3";
import Directive from "./plugins/directive";
import GoogleRecaptcha from "./plugins/recaptcha";

import "atropos/scss";
import "normalize.css";
import "@animxyz/core";
import "./assets/font/index.scss";
import "./assets/style/reset.scss";
import "./assets/style/animate.scss";
import "cropperjs/dist/cropper.min.css";

createApp(App)
  .use(i18n)
  .use(naive)
  .use(router)
  .use(Directive)
  .use(VueAnimXyz)
  .use(createPinia())
  .use(GoogleRecaptcha)
  .mount("#app");
