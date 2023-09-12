import { App } from "vue";
import router from "@/router";
import ENVDSN from "@/assets/env";
import * as Sentry from "@sentry/vue";

const install = (app: App) => {
  Sentry.init({
    app,
    dsn: ENVDSN.SENTRY_DSN,

    integrations: [
      new Sentry.Replay(),
      new Sentry.BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      }),
    ],

    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });
};

export default install;
