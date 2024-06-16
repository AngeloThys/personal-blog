import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [Icons({
      compiler: "astro"
    })]
  },
  integrations: [tailwind()]
});