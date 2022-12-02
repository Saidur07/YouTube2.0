/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  daisyui: {
    themes: [
      {
        UxiubeTheme: {
          primary: "#1b9ff1",
          secondary: "#bd52fd",
        },
      },
    ],
  },
};
