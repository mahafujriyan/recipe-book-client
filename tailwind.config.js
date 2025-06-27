
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "data-theme", 
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#F3F3F3",
          secondary: "#D72050",
          accent: "#706F6F",
          "base-100": "#ffffff",
          "base-200": "#E7E7E7",
          "base-300": "#403F3F",
        },
      },
      {
        dark: {
          primary: "#1f2937",
          secondary: "#f43f5e",
          accent: "#d1d5db",
          "base-100": "#1e1e1e",
          "base-200": "#2e2e2e",
          "base-300": "#3e3e3e",
        },
      },
    ],
  },
};
