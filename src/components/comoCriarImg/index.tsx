import React from "react";
import Image from "next/image";
export function ImgVagas() {
  return (
   
      <Image
        src='/imagens/ComoCriar.png' // Caminho da imagem
        alt='Descrição da imagem' // Texto alternativo para acessibilidade
        width={500} // Defina a largura desejada
        height={300} // Defina a altura desejada
        className='' // Se necessário, adicione uma classe para personalização
        priority // Carregamento prioritário, se necessário
      />
    
  );
}
