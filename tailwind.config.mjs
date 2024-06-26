const { addIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: '"Space Grotesk"',
      },
    },
  },
  plugins: [
    addIconSelectors([
      "fluent-emoji",
      "logos",
      "material-symbols-light",
      "skill-icons",
      "simple-icons",
    ]),
  ],
};
