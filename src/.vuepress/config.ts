import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "VDAP",
      description:
        "ðï¸ ä¸ä¸ªæ¯æå¤ç§æ°æ®ææç®æ³çå¯è§åæ°æ®åæå¹³å°ï¼ä½¿ç¨ Django-ninja å Vue.jsã",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
