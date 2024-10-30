import React from "react";
import Image from "next/image"; // Importando o componente Image do Next.js

export default function ImgVagas() {
  return (
    <div className='w-1/2 p-2 flex items-center justify-center'>
      <Image
        src='/imagens/ComoCriar.png'
        alt='Descrição da imagem'
        width={300} // Defina a largura desejada
        height={100} // Defina a altura desejada
        priority // Carregamento prioritário, se necessário
      />
    </div>
  );
}
