import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "VDAP",
  description: "可视化数据分析平台",
  head: [["link", { rel: "icon", href: "/images/favicon.ico" }]],
  theme: defaultTheme({
    // Public 文件路径
    logo: "/images/hero.png",
  }),
});
