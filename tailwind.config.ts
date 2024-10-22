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
        corDestaque: #ff9ea1,
        corDestaquePricipal: '#3f3011',
        corDestaquePricipaMedial: '#534527',
        corDestaqueHover: '#7a7262',
        corHeader: '#fffaf1',
        corVerde: '#51fc02',

    
      },
    },
  },
  plugins: [],
};
export default config;
