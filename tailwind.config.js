/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-grey": "#F4F7FE",
        "light-blue": "#EDF0F9",
        black: "#1C3048",
      },
      screens: {
        "3xl": "1538px",
        "2xl": "1400px",
        "5xl": "2000px",
        muiLG: "1200px",
        "2sm": "350px",
        "2md": "900px",
        fold: "300px",
      },
    },
  },
  plugins: [],
};
