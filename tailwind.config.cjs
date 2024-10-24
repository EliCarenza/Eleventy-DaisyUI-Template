/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,md,njk}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    logs: false,
    themes: ["light", "dark"],
    darkTheme: "dark",
  },
};
