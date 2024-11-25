"use client"; // Diretiva para garantir que o código seja executado no lado do cliente, necessário no Next.js para garantir que o código não seja renderizado no servidor

import Link from "next/link"; // Importação do componente Link do Next.js para navegação entre páginas
import "animate.css"; // Importação do CSS da biblioteca animate.css para animações

import { useState, useEffect } from "react"; // Importação de hooks do React para gerenciar o estado e os efeitos colaterais
import { FaUser, FaUserCheck } from "react-icons/fa"; // Importação dos ícones de usuário do React Icons

export default function Header() {
  // Estado para verificar se o usuário está logado ou não
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Efeito para verificar se o usuário está logado, acessando o localStorage
    const user = localStorage.getItem("userLoggedIn"); // Recupera o item "userLoggedIn" do localStorage
    setIsLoggedIn(!!user); // Se "user" existir, define isLoggedIn como true; caso contrário, false
  }, []);

  // Função que trata o logout do usuário
  const handleLogout = () => {
    const confirmLogout = window.confirm("Deseja fechar a sessão?"); // Pergunta ao usuário se ele deseja fazer logout
    if (confirmLogout) {
      // Se o usuário confirmar, remove o item "userLoggedIn" do localStorage e atualiza o estado
      localStorage.removeItem("userLoggedIn");
      setIsLoggedIn(false); // Atualiza o estado de login para falso
      alert("Você foi desconectado."); // Exibe um alerta informando que o usuário foi desconectado
    }
  };

  // Função chamada ao clicar no ícone de usuário
  const handleLoginClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    // Se o usuário já estiver logado, impede que o clique redirecione para a página de login
    if (isLoggedIn) {
      e.preventDefault(); // Impede o redirecionamento padrão do Link
    }
  };

  return (
    <header>
      {/* Logo da aplicação, com animação */}
      <div className='logo animate__animated animate__rubberBand boxLogo'>
        <Link href='/'>
          <span className='text-corDestaqueTitulo text-[1.2em] font-bold cursor-pointer hover:text-corSecundaria'>
            Empregue
          </span>
        </Link>
      </div>

      {/* Navegação com links para outras páginas da aplicação */}
      <div className='boxNav'>
        <ul>
          <li>
            <Link href='/'>HOME</Link>
          </li>
          <li>
            <Link href='/sobre'>SOBRE</Link>
          </li>
          <li>
            <Link href='/vagas'>VAGAS</Link>
          </li>
          <li>
            <Link href='/cadastro'>CADASTRO</Link>
          </li>
          <li>
            <Link href='/contato'>CONTATO</Link>
          </li>
        </ul>
      </div>

      {/* Seção do usuário, mostrando ícone de login ou logout */}
      <div className='boxUser'>
        <Link href='/user'>
          <div onClick={handleLoginClick}>
            {" "}
            {/* Evita redirecionamento ao clicar se o usuário estiver logado */}
            {isLoggedIn ? (
              // Se o usuário estiver logado, exibe o ícone de "usuário logado" (FaUserCheck)
              <FaUserCheck
                className='text-corVerdeMedio hover:text-corSecundaria transition-colors cursor-pointer'
                size={30}
                onClick={handleLogout} // Chama a função de logout ao clicar no ícone
              />
            ) : (
              // Se o usuário não estiver logado, exibe o ícone de "usuário" (FaUser)
              <FaUser
                className='hover:text-corSecundaria transition-colors'
                size={24}
              />
            )}
          </div>
        </Link>
      </div>
    </header>
  );
}