import { IoSearch } from "react-icons/io5";

export default function Button() {
    return (
      <button
        id='lupa'
        className='bg-corPrimaria hover:bg-corDestaqueTitulo p-10 flex items-center justify-center rounded-full cursor-pointer mt-5 w-full py-3'
      >
        <IoSearch className='text-aliceblue text-xl mr-1.5' />
        <span className='text-[aliceblue] text-[1.2em]'>Pesquisar</span>
      </button>
    );
}
