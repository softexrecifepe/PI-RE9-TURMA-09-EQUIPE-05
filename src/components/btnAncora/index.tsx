import React from "react";
import Link from "next/link"; // Alterado para o Link do Next.js

export default function BtnAncora() {
  return (
    <Link
      href='/criarVagas'
      className='bg-corPrimaria hover:bg-corDestaqueTitulo text-corTextoBotao text-lg mt-5 w-1/3 flex items-center justify-center pt-3 border-none rounded-full px-12 py-2 font-semibold'
    >
      Ok!
    </Link>
  );
}
