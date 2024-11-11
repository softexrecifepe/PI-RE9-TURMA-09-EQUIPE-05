import React from "react";

interface BtnEuQueroProps {
  type?: "button" | "submit" | "reset"; // Define uma prop opcional "type"
  onClick?: () => void; // Define uma prop opcional "onClick"
}

export default function BtnEuQuero({ type = "button", onClick }:
    BtnEuQueroProps) {
  return (
    <div className='boxbtnVagas'>
      <button
        type={type} // Atribui o tipo ao botão
        onClick={onClick} // Atribui a função onClick, se fornecida
        className='bg-corPrimaria hover:bg-corDestaqueTitulo text-corTextoBotao text-lg mt-5 w-3/3 flex items-center justify-center pt-3 border-none rounded-full px-12 py-2 font-semibold'
      >
        Eu quero!
      </button>
    </div>
  );
}
