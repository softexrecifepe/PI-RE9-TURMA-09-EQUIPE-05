import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-family-main)']
      },
      colors: {
        primary: '#Ad0006',
        secondary: '#FF0009',
        terceary: '#Ff6166' ,
        headerIcons:'#666666',
        fonts: '#6c6c6c'
      },
    },
  },
  plugins: [],
};
export default config;
