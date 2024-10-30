import Link from "next/link";
import { FaUser } from "react-icons/fa";

export default function Header() {

    return (
        <header className="w-full bg-corHeader h-14 flex items-center justify-around border border-corBordaHeader">
            <Link href="/">
                <span className="text-2xl text-corDestaqueTitulo font-bold cursor-pointer">Empregue</span>
            </Link>
            <nav>
                <Link href="/" className="hover:text-corSecundaria cursor-pointer tracking-widest ml-5 transition ease-linear duration-200">HOME</Link>
                <Link href="/sobre" className="hover:text-corSecundaria cursor-pointer tracking-widest ml-5 transition ease-linear duration-200">SOBRE</Link>
                <Link href="/vagas" className="hover:text-corSecundaria cursor-pointer tracking-widest ml-5 transition ease-linear duration-200">VAGAS</Link>
                <Link href="/cadastro" className="hover:text-corSecundaria cursor-pointer tracking-widest ml-5 transition ease-linear duration-200">CADASTRO</Link>
                <Link href="/contato" className="hover:text-corSecundaria cursor-pointer tracking-widest ml-5 transition ease-linear duration-200">CONTATO</Link>
            </nav>
            <div className="text-corDestaquePricipal text-lg flex items-center hover:text-corSecundaria cursor-pointer">
                <Link href="/login"><FaUser /></Link>
            </div>
        </header>
    )
}