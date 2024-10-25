import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home-image': "url('/imagens/home.png')"
      },
      minHeight: {
        '90vh': '90vh',  // Adiciona a classe min-h-90vh
      },
      fontFamily: {
        sans: ["var(--font-family-main)"],
      },
      colors: {
        corPrimaria: "#ad0006",
        corDestaqueTitulo: "#ff0009",
        corSecundaria: "#ff6166",
        corDestaque: "#ff9ea1",
        corDestaquePricipal: "#3f3011",
        corDestaquePricipalMedial: "#534527",
        corDestaqueHover: "#7a7262",
        corHeader: "#fffaf1",
        corVerde: "#51fc02",
        corTextoBotao: "#f0f8ff",

      },
    },
  },
  plugins: [],
};
export default config;
