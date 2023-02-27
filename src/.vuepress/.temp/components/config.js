import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "D:/desktop/Dissertation/code/start/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-components@2.0.0-beta.183_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-components/lib/client/shared.js";
import { h } from "vue";

import { useStyleTag } from "D:/desktop/Dissertation/code/start/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-components@2.0.0-beta.183_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import Badge from "D:/desktop/Dissertation/code/start/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-components@2.0.0-beta.183_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "D:/desktop/Dissertation/code/start/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-components@2.0.0-beta.183_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "D:/desktop/Dissertation/code/start/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-components@2.0.0-beta.183_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "D:/desktop/Dissertation/code/start/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-components@2.0.0-beta.183_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
      useStyleTag(`\
  @import url("//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `);
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
  ],
});
