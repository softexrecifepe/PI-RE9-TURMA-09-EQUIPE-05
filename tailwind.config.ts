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
        'home-image': "url('/imagens/home.png')",
        'custom-gradient': 'linear-gradient(to top right, #ff8b8b, #fff5eb, #fff5eb, #fff6ee, #fff6ee)',
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
        corVerdeMedio: "#27B500",
        corTextoBotao: "#f0f8ff",
        corBordaHeader: "#e5c0a0"        
      },
    },
  },
  plugins: [],
};
export default config;
