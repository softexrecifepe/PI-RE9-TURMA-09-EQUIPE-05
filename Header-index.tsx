// Header.tsx
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Caminho atualizado para Font Awesome

function Header() {
  return (
    <div className='flex justify-between items-center p-5'>
      <div className='text-red-600  hover:text-red-500 font-bold text-xl'>
        Empregue
      </div>

      <nav>
        <ul className='flex space-x-4'>
          <li>
            <a
              href='index.html'
              className='text-red-950 hover:text-red-500 tracking-[2px]'
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href='sobre.html'
              className='text-red-950 hover:text-red-500 tracking-[2px]'
            >
              SOBRE
            </a>
          </li>
          <li>
            <a
              href='vagas.html'
              className='text-red-950 hover:text-red-500 tracking-[2px]'
            >
              VAGAS
            </a>
          </li>
          <li>
            <a
              href='cadastro.html'
              className='text-red-950 hover:text-red-500 tracking-[2px]'
            >
              CADASTRO
            </a>
          </li>
          <li>
            <a
              href='contato.html'
              className='text-red-950 hover:text-red-500 tracking-[2px]'
            >
              CONTATO
            </a>
          </li>
        </ul>
      </nav>

      {/* Ícone de usuário */}
      <div>
        <a href='user.html'>
          <i className='fa fa-user text-red-950 hover:text-red-500'></i>
        </a>
      </div>
    </div>
  );
}

export default Header;
