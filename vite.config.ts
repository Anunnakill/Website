// 别名设置
import { resolve } from "path";
// ts类型检测
import { defineConfig } from "vite";
// 样式自动前缀
import autoprefixer from "autoprefixer";
// 注入插件
import inject from "@rollup/plugin-inject";
// vite内vue插件
import vuePlugin from "@vitejs/plugin-vue";
// 主题配置插件
import themePreprocessorPlugin from "@zougt/vite-plugin-theme-preprocessor";

// 配置项
export default defineConfig({
  // 资源跟路径
  base: "/",
  // vue适配插件
  plugins: [
    // 加载插件
    vuePlugin(),
    // 主题插件
    themePreprocessorPlugin({
      scss: {
        // 是否启用任意主题色模式
        arbitraryMode: false,
        // 预处理器的变量文件
        multipleScopeVars: [
          {
            scopeName: "theme-dark",
            path: resolve("src/assets/style/theme/dark.scss"),
          },
          {
            scopeName: "theme-light",
            path: resolve("src/assets/style/theme/light.scss"),
          },
        ],
        // 默认主题
        defaultScopeName: "theme-dark",
        // 在生产模式是否抽取独立的主题css文件
        extract: false,
      },
    }),
  ],
  // JSON解释方式
  json: {
    stringify: true,
  },
  // 资源内联限制
  build: {
    minify: "esbuild",

    assetsInlineLimit: 0,

    commonjsOptions: {
      transformMixedEsModules: true,
    },

    rollupOptions: {
      plugins: [inject({ Buffer: ["buffer", "Buffer"] })],
    },
  },
  // 别名配置
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
      {
        find: "process",
        replacement: "process/browser",
      },
      {
        find: "stream",
        replacement: "stream-browserify",
      },
      {
        find: "zlib",
        replacement: "browserify-zlib",
      },
      {
        find: "util",
        replacement: "util",
      },
    ],
  },
  // 服务配置（代理模式）
  server: {
    // 自动打开
    open: true,
    // 代理
    proxy: {
      // 测试
      "/staging": {
        target: "",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/staging/, ""),
      },

      // 正式
      "/production": {
        target: "",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/production/, ""),
      },
    },
  },
  // 预处理器配置
  css: {
    // 样式插件
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ["last 20 versions"],
        }),
      ],
    },
    // 样式处理
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
      },
    },
  },
});
