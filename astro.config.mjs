import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import NetlifyCMS from "astro-netlify-cms";
import dcapConfig from "./decap.config.mjs";
import astropodConfig from "./.astropod/astropod.config.json";
import robotsTxt from "astro-robots-txt";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: astropodConfig.site, // 这里保持你原来的 astropodConfig.site
  integrations: [
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          allow: "/",
          disallow: "/admin",
        },
      ],
    }),
    mdx(),
    sitemap(),
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
      cacheDir: "./.cache/image",
      logLevel: "debug",
    }),
    NetlifyCMS({
      config: dcapConfig(),
    }),
  ],
  vite: {
    build: {
      chunkSizeWarningLimit: 2000, // 新增：调整 chunk size 警告阈值
    },
  },
});
