import React from "react";

interface BtnCriarVagasProps {
  type?: "button" | "submit" | "reset"; // Define uma prop opcional "type"
  onClick?: () => void; // Define uma prop opcional "onClick"
}

export default function BtnCriarVagas({
  type = "button",
  onClick,
}: BtnCriarVagasProps) {
  return (
    <div className='boxbtnVagas'>
      <button
        type={type} // Atribui o tipo ao botão
        onClick={onClick} // Atribui a função onClick, se fornecida
        className='bg-corPrimaria hover:bg-corDestaqueTitulo text-corTextoBotao text-lg mt-5 w-2/3 flex items-center justify-center pt-3 border-none rounded-full px-12 py-2 font-semibold'
      >
        Ok!
      </button>
    </div>
  );
}
