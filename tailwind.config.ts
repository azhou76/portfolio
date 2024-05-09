import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        sans: ["Lato", "sans-serif"],
        monospace: ["Inconsolata", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
