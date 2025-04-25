/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      title: "1.5rem",
      "2xl": "1.75rem",
      "3xl": "2rem",
      "4xl": "2.5rem",
      "5xl": "3rem",
      "6xl": "3.5rem",
    },
    extend: {
      borderWidth: {
        1: "1px",
      },
      colors: {
        black: "#131313",
        "dark-gray": "#64748b",
        gray: "#efefe6",
        "light-gray": "#e5e5e5",
        brick: "#a2543d",
      },
    },
  },
  plugins: [],
};
