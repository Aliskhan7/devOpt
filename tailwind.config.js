/** @type {import('tailwindcss').Config} */
module.exports = {
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
        blue: {
          100: "#3F57DA",
          200: "#243BB9",
          300: "#172266",
          400: "#101437",
          500: "#172136",
        },
        gray: {
          100: "#eff1f6",
          200: "#bdc4d1",
        },
      },
      fontSize: {
        md: [
          "16px",
          {
            lineHeight: "137%",
          },
        ],
      },
    },
  },
  plugins: [],
};
