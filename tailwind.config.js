/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      primary: "#00305D",
      secondary: "#0086A3",
      accent: "#ABBBCA",
      light: "#FFFFFF"
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"]
    },
  },
};
export const plugins = [];