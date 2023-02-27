import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "VDAP",
      description:
        "🗂️ 一个支持多种数据挖掘算法的可视化数据分析平台，使用 Django-ninja 和 Vue.js。",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
