import React from "react";
import Image from "next/image";
export function SobreImg() {
    return (
      
      <Image
        src='/imagens/t1.png' // Caminho da imagem
        alt='Descrição da imagem' // Texto alternativo para acessibilidade
        width={300} // Defina a largura desejada
        height={100} // Defina a altura desejada
        className='boxImage' // Se necessário, adicione uma classe para personalização
        priority // Carregamento prioritário, se necessário
      />
    
  );
}
