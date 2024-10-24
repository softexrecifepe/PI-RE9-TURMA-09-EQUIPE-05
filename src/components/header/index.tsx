import { FaUser } from "react-icons/fa";

export default function Header(){
    return (
        <header className="w-full bg-corHeader h-14 flex items-center justify-around">
            <span className="text-2xl text-cordestaqueTitulo font-bold cursor-pointer">Empregue</span>
            <nav>
                <a href="#" className="hover:text-corSecundaria cursor-pointer tracking-widest ml-5 transition ease-linear duration-200">HOME</a>
                <a href="#" className="hover:text-corSecundaria cursor-pointer tracking-widest ml-5 transition ease-linear duration-200">SOBRE</a>
                <a href="#" className="hover:text-corSecundaria cursor-pointer tracking-widest ml-5 transition ease-linear duration-200">VAGAS</a>
                <a href="#" className="hover:text-corSecundaria cursor-pointer tracking-widest ml-5 transition ease-linear duration-200">CADASTRO</a>
                <a href="#" className="hover:text-corSecundaria cursor-pointer tracking-widest ml-5 transition ease-linear duration-200">CONTATO</a>
            </nav>
            <div className="text-corDestaquePricipal text-lg flex items-center hover:text-corSecundaria cursor-pointer">
                <i><FaUser /></i>
            </div>
        </header>
    )
}