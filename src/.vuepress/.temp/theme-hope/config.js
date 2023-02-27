import { defineClientConfig } from "@vuepress/client";

import HopeIcon from "@theme-hope/components/HopeIcon";
import Layout from "D:/desktop/Dissertation/code/start/node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-beta.183_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js";
import NotFound from "D:/desktop/Dissertation/code/start/node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-beta.183_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-theme-hope/lib/client/layouts/NotFound.js";

import { useScrollPromise } from "@theme-hope/composables/index";
import { injectDarkmode, setupDarkmode } from "@theme-hope/modules/outlook/composables/index";
import { setupSidebarItems } from "@theme-hope/modules/sidebar/composables/index";

import "D:/desktop/Dissertation/code/start/node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-beta.183_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-theme-hope/lib/client/styles/index.scss";

import Slide from "D:/desktop/Dissertation/code/start/node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-beta.183_44bug2q4gvgfsg4b36ccgweufe/node_modules/vuepress-theme-hope/lib/client/layouts/Slide.js";

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // render icon for auto-catalog
    app.component("HopeIcon", HopeIcon);


  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,
    Slide,
  }
});