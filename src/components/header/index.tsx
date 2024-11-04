import Link from "next/link"; // Importa o componente Link do Next.js
import { FaUser } from "react-icons/fa";

export default function Header() {
    return (
      <header>       
        <div className='logo animate__animated animate__rubberBand boxLogo'>
          <Link href='/'>{/* Usa o Link para navegação */}
            <span className='text-corDestaqueTitulo text-[1.2em] font-bold cursor-pointer hover:text-corSecundaria'>
              Empregue
            </span>
          </Link>
        </div>
        <div className='boxNav'>
          <ul>
            <li>
              <Link href='/'>HOME</Link> {/* Usa o Link para navegação */}
            </li>
            <li>
              <Link href='/sobre'>SOBRE</Link> {/* Usa o Link para navegação */}
            </li>
            <li>
              <Link href='/vagas'>VAGAS</Link> {/* Usa o Link para navegação */}
            </li>
            <li>
              <Link href='/cadastro'>CADASTRO</Link>{/* Usa o Link para navegação */}
             
            </li>
            <li>
              <Link href='/contato'>CONTATO</Link>{/* Usa o Link para navegação */}
            </li>
          </ul>
        </div>
        <div className='boxUser'>
          <Link href='/user'>{/* Usa o Link para navegação */}
            <i className='fa-solid fa-user'>
              <FaUser />
            </i>
          </Link>
        </div>
      </header>
    );
    
}
