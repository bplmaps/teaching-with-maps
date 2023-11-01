/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["dashiell-bright", ...defaultTheme.fontFamily.serif],
        sans: ["tenon", ...defaultTheme.fontFamily.sans],
      },
      brightness: {
        25: '.25',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
