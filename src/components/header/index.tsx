import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";

export default function Header() {
    return (
        <header className="w-full bg-corHeader h-14 flex items-center justify-around">
            <Link to="/">
                <span className="text-2xl text-cordestaqueTitulo font-bold cursor-pointer">Empregue</span>
            </Link>
            <nav>
                <Link to="/" className="hover:text-corSecundaria cursor-pointer tracking-widest ml-5 transition ease-linear duration-200">HOME</Link>
                <Link to="/sobre" className="hover:text-corSecundaria cursor-pointer tracking-widest ml-5 transition ease-linear duration-200">SOBRE</Link>
                <Link to="/vagas" className="hover:text-corSecundaria cursor-pointer tracking-widest ml-5 transition ease-linear duration-200">VAGAS</Link>
                <Link to="/cadastro" className="hover:text-corSecundaria cursor-pointer tracking-widest ml-5 transition ease-linear duration-200">CADASTRO</Link>
                <Link to="/contato" className="hover:text-corSecundaria cursor-pointer tracking-widest ml-5 transition ease-linear duration-200">CONTATO</Link>
            </nav>
            <div className="text-corDestaquePricipal text-lg flex items-center hover:text-corSecundaria cursor-pointer">
                <i><FaUser /></i>
            </div>
        </header>
    )
}