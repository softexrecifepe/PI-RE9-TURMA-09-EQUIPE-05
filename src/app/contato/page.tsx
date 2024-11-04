import Header from "../../components/header";
import Footer from "../../components/footer";
import Social from "@/components/redeSocial";


export default function Contato() {
    return (
        <>
            <Header />
            <div className='w-full h-full flex flex-wrap flex-row px-[50px] py-[100px] items-center justify-center bg-gradient-to-tr from-[#ff8b8b] via-[#fff5eb] to-[#fff6ee] bg-center bg-no-repeat bg-cover overflow-hidden'>
                <div className='flex flex-wrap flex-row w-full h-auto'>
                    <div className='toggleContainer'></div>

                    <div className='w-1/2 h-screen px-[20px] py-[100px] text-justify text-[var(--principal)]'>
                        <h1 className='text-2xl font-bold text-corSecundaria'>
                            Endereço
                        </h1>
                        <p>Av. Conde da Boa Vista, 1156</p>
                        <p>Edf. São Luiz, Sala: 223 - 2° Andar</p>
                        <p>Recife - Pernambuco</p>
                        <p>Cep: 50000-000</p>
                    </div>
                    <Social />
                </div>
            </div>

            <Footer />
        </>
    );
}