import React from "react";
import { useRouter } from "next/navigation";

interface BtnEuQueroProps {
  type?: "button" | "submit" | "reset"; // Define uma prop opcional "type"
  onClick?: () => void; // Define uma prop opcional "onClick"
}

export default function BtnEuQuero({
  type = "button",
  onClick,
}: BtnEuQueroProps) {
  const router = useRouter();

  // Função chamada quando o botão é clicado
  const handleClick = () => {
    const userLoggedIn = JSON.parse(
      localStorage.getItem("userLoggedIn") || "null"
    );

    if (userLoggedIn) {
      const nome = userLoggedIn.nome; 
      alert(`${nome}, sua candidatura foi efetuada com sucesso!`);
      router.push("/"); // Redireciona para a página home
    } else {
      alert("É necessário efetuar o login");
      router.push("/user"); // Redireciona para a página de login (ou cadastro)
    }

    // Chama a função onClick fornecida, se houver
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className='boxbtnVagas'>
      <button
        type={type} // Atribui o tipo ao botão
        onClick={handleClick} // Atribui a função handleClick, que realiza a verificação de login
        className='bg-corPrimaria hover:bg-corDestaqueTitulo text-corTextoBotao text-lg mt-5 w-3/3 flex items-center justify-center pt-3 border-none rounded-full px-12 py-2 font-semibold'
      >
        Eu quero!
      </button>
    </div>
  );
}
