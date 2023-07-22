import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "QRWells' Blog",
      description: "A blog for knowledge sharing",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "QRWells的博客",
      description: "一个用于知识分享的博客",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
