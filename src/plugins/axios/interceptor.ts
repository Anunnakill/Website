import axios from "axios";
import ENV from "@/assets/env";
import { loadingBar } from "@/utils";

const _axios = axios.create({
  timeout: 300000,
  baseURL: ENV.https,
  responseType: "json",
});

_axios.interceptors.request.use(
  config => {
    loadingBar.start();
    config.method?.toUpperCase() === "POST" && (config.data = JSON.stringify(config.data));
    return config;
  },

  error => {
    loadingBar.error();
    return Promise.reject(error);
  },
);

_axios.interceptors.response.use(
  ({ data, status }) => {
    if (status === 200) {
      loadingBar.finish();
      return Promise.resolve(data);
    }

    loadingBar.error();
    return Promise.reject(data);
  },

  error => {
    loadingBar.error();
    return Promise.reject(error);
  },
);

export default _axios;
