// Home.tsx
import React from "react";
import Header from "./Header/Header-index"; // Certifique-se de que o caminho esteja correto
import Footer from "@/app/Footer/Footer-index";
import Container from "./Container/Container-index";
import ButtonLupa from "./ButtonLupa/ButtonLupa-index";
import "./Input/Input.css"; // Certifique-se de que este caminho está correto

const Home: React.FC = () => {
  return (
    <main>
      <Header />
      <section
        id='homeImg'
        className='w-full flex-wrap p-[100px] px-[50px] bg-center bg-no-repeat bg-cover h-screen overflow-hidden'
      >
        <Container />
        <div className='w-[30%] h-auto p-5 rounded-[20px] border border-[#ff0009] text-aliceblue overflow-y-auto'>
          <input
            type='text'
            id='cargo'
            className='input-field' // Adicionando a classe
            placeholder='Cargo ou profissão'
            title='Cargo ou profissão'
            required
            maxLength={30} // Usando maxLength corretamente
          />
          <input
            type='text'
            id='filtraCep'
            className='input-field' // Adicionando a classe
            placeholder='Digite seu CEP'
            title='Digite seu CEP'
            required
            maxLength={9} // Usando maxLength corretamente
          />
          <ButtonLupa />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
