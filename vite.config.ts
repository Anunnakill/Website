import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import vuePlugin from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import compressPlugin from "vite-plugin-compression";

export default defineConfig({
  base: "/",

  plugins: [
    vuePlugin(),

    compressPlugin({
      ext: ".gz",
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      deleteOriginFile: false,
    }),
  ],

  json: {
    stringify: true,
  },

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  build: {
    sourcemap: false,
    minify: "esbuild",
    assetsInlineLimit: 0,
    reportCompressedSize: false,
    commonjsOptions: { transformMixedEsModules: true },
  },

  server: {
    open: true,
    port: 5259,
    host: "127.0.0.1",

    proxy: {
      "/staging": {
        changeOrigin: true,
        target: "https://data-platform.staging.muaverse.build",
        rewrite: localDevelopmentAddress => localDevelopmentAddress.replace(/^\/staging/, ""),
      },

      "/production": {
        changeOrigin: true,
        target: "https://data-platform.muaverse.build",
        rewrite: localDevelopmentAddress => localDevelopmentAddress.replace(/^\/production/, ""),
      },
    },
  },

  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ["last 20 versions"],
          grid: true,
        }),
      ],
    },

    preprocessorOptions: {
      scss: { javascriptEnabled: true },
    },
  },
});
