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
        light: {
          1: "#FFFFFF",
          2: "#F8F9FA",
          3: "#E9ECEF",
          4: "#DEE2E6",
          5: "#CED4DA",
          6: "#ADB5BD",
          7: "#6C757D",
          8: "#495057",
          9: "#343A40",
          10: "#212529",
        },
        dark: {
          1: "#000000",
          2: "#212529",
          3: "#343A40",
          4: "#495057",
          5: "#6C757D",
          6: "#ADB5BD",
          7: "#CED4DA",
          8: "#DEE2E6",
          9: "#E9ECEF",
          10: "#F8F9FA",
        },
      },
      spacing: {
        1.25: "0.29rem",
        90: "22rem",
      },
    },
  },
  plugins: [],
};
export default config;
