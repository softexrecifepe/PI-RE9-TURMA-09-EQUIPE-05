// Home.tsx
import React from "react";
import Header from "./Header/Header-index"; // Certifique-se de que o caminho esteja correto
import Footer from "@/Footer/Footer-index";

const Home: React.FC = () => {
  return (
    <main>
      <Header />
      <section
        id='homeImg'
        className='w-full flex-wrap p-[100px] px-[50px] bg-center bg-no-repeat bg-cover h-screen overflow-hidden'>
        {/* Conteúdo da seção aqui */}
      </section>
      <Footer />
    </main>
  );
};

export default Home;
