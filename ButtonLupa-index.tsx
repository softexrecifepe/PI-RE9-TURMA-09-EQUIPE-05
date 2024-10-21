import React from "react";

function BotaoPesquisar() {
  return (
    <button
      id='lupa'
      className='btn bg-[#ad0006] flex items-center justify-center rounded-full cursor-pointer w-full py-2 mt-5 hover:bg-[#ff0009] transition-colors'
    >
      <i className='fa-solid fa-magnifying-glass mr-2 text-aliceblue text-xl text-slate-50'></i>
      <span className='btnText text-aliceblue text-xl text-slate-50'>
        Pesquisar
      </span>
    </button>
  );
};

export default BotaoPesquisar;
