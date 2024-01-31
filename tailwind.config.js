/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "primary-clr-green": "hsl(75, 94%, 57%)",
      "neutral-clr-white": "hsl(0, 0%, 100%)",
      "neutral-clr-grey": "hsl(0, 0%, 20%)",
      "neutral-clr-dark-grey": "hsl(0, 0%, 12%)",
      "neutral-clr-off-black": "hsl(0, 0%, 8%)",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
