"use client"; // Para garantir renderização no lado do cliente

import Header from "../../components/header";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";

interface Usuario {
  nome: string;
  sobreNome: string;
  email: string;
  telefone: string;
  endereco: string;
  bairro: string;
  cidade: string;
  cep: string;
}

export default function SobreUser() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    // Verifica se o usuário está logado no localStorage
    const usuarioLogado = JSON.parse(
      localStorage.getItem("userLoggedIn") || "null"
    );

    if (usuarioLogado) {
      setUsuario(usuarioLogado);
    }

    // Adiciona o listener para detectar o fechamento da aba ou do navegador
    const handleBeforeUnload = () => {
      // Limpa o localStorage quando a aba for fechada ou recarregada
      localStorage.removeItem("userLoggedIn");
    };

    // Adiciona o evento antes de a janela ser fechada
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Limpeza do efeito
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  if (!usuario) {
    return (
      <div>
        <Header />
        <div className='w-full h-full flex justify-center items-center'>
          <h2>
            Você não está logado. Por favor, faça login para ver seus dados.
          </h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Header />
      <section
        id='containerRow'
        className='w-full flex flex-wrap flex-row py-24 px-12 items-center justify-center bg-gradient-to-tr from-[#ff8b8b] via-[#fff5eb] to-[#fff6ee] bg-center bg-no-repeat bg-cover h-full overflow-hidden'
      >
        <div className='boxRow flex flex-wrap flex-row w-full h-auto'>
          <div className='toggleContainer'></div>
          <div className='boxTxt w-1/2 p-5 text-justify text-[var(--principal)]'>
            <h2>Meu cadastro</h2>
            <span>Seja bem-vindo(a) ao sistema, </span>
            <span id='nome' className='font-bold text-corVerdeMedio'>
              {usuario?.nome}{" "}
            </span>
            <div className='boxDados py-[50px] px-[20px]'>
              <p>
                <strong>Nome:</strong> {usuario?.nome} {usuario?.sobreNome}
              </p>
              <p>
                <strong>Email:</strong> {usuario?.email}
              </p>
              <p>
                <strong>Telefone:</strong> {usuario?.telefone}
              </p>
              <p>
                <strong>Endereço:</strong> {usuario?.endereco}
              </p>
              <p>
                <strong>Bairro:</strong> {usuario?.bairro}
              </p>
              <p>
                <strong>Cidade:</strong> {usuario?.cidade}
              </p>
              <p>
                <strong>CEP:</strong> {usuario?.cep}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
