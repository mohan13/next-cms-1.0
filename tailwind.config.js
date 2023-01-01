/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976x",
      lg: "1440px",
    },
    extend: {
      colors: {
        background: "#232946",
        Headline: "#fffffe",
        paragraph: "#b8c1ec",
        button: "#eebbc3",
        btnText: "#232946",
        borderColor:'#121629'
      },
    },
  },
  plugins: [],
};
