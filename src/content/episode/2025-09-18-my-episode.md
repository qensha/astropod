import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://astropod-two.vercel.app", // 这里换成你自己的网站域名
  integrations: [sitemap()],
  vite: {
    build: {
      // 默认 500kb，改大一点就不会报警告了
      chunkSizeWarningLimit: 1500,
    },
  },
});
