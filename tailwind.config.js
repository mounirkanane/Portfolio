/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199 (dark pink)
        primaryDark: "#58E6D9", // 80,230,217 (electric blue)
      },
    },
  },
  plugins: [],
};
