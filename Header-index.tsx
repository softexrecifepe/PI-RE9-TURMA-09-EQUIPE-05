// Header.tsx
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Caminho atualizado para Font Awesome

function Header() {
  return (
    <div className='flex justify-between items-center p-5 [var(--cor-header)]'>
      <div className='text-red-500 font-bold text-xl'>Empregue</div>

      <nav>
        <ul className='flex space-x-4'>
          <li>
            <a href='index.html' className='text-red-950 hover:text-red-500'>
              HOME
            </a>
          </li>
          <li>
            <a href='sobre.html' className='text-red-950 hover:text-red-500'>
              SOBRE
            </a>
          </li>
          <li>
            <a href='vagas.html' className='text-red-950 hover:text-red-500'>
              VAGAS
            </a>
          </li>
          <li>
            <a href='cadastro.html' className='text-red-950 hover:text-red-500'>
              CADASTRO
            </a>
          </li>
          <li>
            <a href='contato.html' className='text-red-950 hover:text-red-500'>
              CONTATO
            </a>
          </li>
        </ul>
      </nav>

      {/* Ícone de usuário */}
      <div>
        <a href='user.html'>
          <i className='fa fa-user text-red-950 hover:text-red-900'></i>
        </a>
      </div>
    </div>
  );
}

export default Header;
