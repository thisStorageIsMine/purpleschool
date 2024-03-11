import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#3B434E",
        white: "#FFFFFF",
        purple: {
          DEFAULT: "#7653FC",
          dark: "#6a52ca",
        },
        gray: {
          DEFAULT: "#787D85",
          light: "#EBEBEB"
        },
        red: {
          DEFAULT: "#DE0000",
          light: "#FC836D",
        },
        yellow: "#DCB44E",
        green: {
          DEFAULT: "#1DC37E",
          light: "#C8F8E4"
        },
      },
    }
  }, 
  plugins: [],
};
export default config;
