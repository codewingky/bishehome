import { defineUserConfig, defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "VDAP",
  description: "可视化数据分析平台",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  theme: defaultTheme({
    // Public 文件路径
    logo: "/images/hero.png",
    // 404 page
    notFound: [
      "这里什么都没有",
      "我们怎么到这来了？",
      "这是一个 404 页面",
      "看起来我们进入了错误的链接",
    ],
    backToHome: "返回首页",

    navbar: [
      // 指南
      {
        text: "指南",
        link: "/guide/",
      },
    ],
  }),
});
