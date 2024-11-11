import { IoSearch } from "react-icons/io5";

// Definindo o tipo das props, incluindo onClick como obrigatório
interface ButtonProps {
  onClick: () => void; // Aceita uma função para o clique
}

export default function Button({ onClick }: ButtonProps) {
  return (
    <button
      id='lupa'
      onClick={onClick} // Usando a propriedade onClick passada como prop
      className='bg-corPrimaria hover:bg-corDestaqueTitulo p-10 flex items-center justify-center rounded-full cursor-pointer mt-5 w-full py-3'
    >
      <IoSearch className='text-aliceblue text-xl mr-1.5' />
      <span className='text-[aliceblue] text-[1.2em]'>Pesquisar</span>
    </button>
  );
}
