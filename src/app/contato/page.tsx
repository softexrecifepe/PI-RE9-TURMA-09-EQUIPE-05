import Header from "../../components/header";
import Footer from "../../components/footer";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";

export default function Contato() {
    return (
        <>
            <Header />
            <div className="min-h-screen py-16 bg-custom-gradient flex justify-between">
                <div className="p-8 w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-corSecundaria mb-4">Endereço</h2>
                    <p className="text-lg text-corDestaquePricipal">Av. Conde da Boa Vista, 1156</p>
                    <p className="text-lg text-corDestaquePricipal">Edf. São Luiz, Sala: 223 - 2° Andar</p>
                    <p className="text-lg text-corDestaquePricipal">Recife - Pernambuco</p>
                    <p className="text-lg text-corDestaquePricipal">Cep: 50000-000</p>;
                </div>
                <div className="flex flex-col mr-80 py-8">
                    <h2 className="text-2xl font-semibold text-corSecundaria  mb-4">Social</h2>
                    <div className="w-full max-w-md flex items-center justify-center">
                        <a href="#" className="text-corDestaquePricipal hover:text-blue-700 text-5xl pr-[6px]"><IoLogoFacebook /></a>
                        <a href="#" className="text-corDestaquePricipal hover:text-blue-700 text-5xl pr-[6px]"><IoLogoLinkedin /></a>
                        <a href="#" className="text-corDestaquePricipal hover:text-blue-700 text-5xl pr-[6px]"><MdEmail /></a>
                        <a href="#" className="text-corDestaquePricipal hover:text-blue-700 text-[44px] pr-[6px]"><FaWhatsappSquare /></a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}