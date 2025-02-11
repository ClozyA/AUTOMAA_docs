// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
// theme/index.ts
import "@theojs/lumen/theme";
import { HomeFooter } from "@theojs/lumen";

import { Footer_Data } from "../data/footerData";
import { Announcement } from "@theojs/lumen";
import { ShareButton } from "@theojs/lumen";
import { googleAnalytics } from "@theojs/lumen";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "layout-bottom": () => h(HomeFooter, { Footer_Data }),
      "home-hero-info-before": () => h(Announcement),
      "aside-outline-before": () => h(ShareButton),
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    googleAnalytics({ id: "G-SE0CWGQ7VL" });
  },
} satisfies Theme;
