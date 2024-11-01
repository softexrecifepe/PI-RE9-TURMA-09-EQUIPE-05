import Header from "../../components/header";
import Footer from "../../components/footer";
import BtnAncora from "@/components/btnAncora";
import ImgVagas from "@/components/imgVagas";
import ComoCriar from "@/components/txtComoCriar";

export default function Vagas() {
    return (
        <>
            <Header />
            <section
                id='containerRow'
                className='w-full min-h-screen flex flex-wrap flex-row py-24 px-12 items-center justify-center bg-gradient-to-tr from-[#ff8b8b] via-[#fff5eb] to-[#fff6ee] bg-center bg-no-repeat bg-cover h-full overflow-hidden'
            >
                <div className='boxRow flex flex-wrap flex-row w-full h-auto'>
                    <div className='toggleContainer'></div>
                    <div className='boxTxt w-1/2 p-5 text-justify text-[var(--principal)]'>
                        <ComoCriar />
                        <BtnAncora />
                    </div>

                    <ImgVagas />

                </div>
            </section>
            <Footer />
        </>
    );
}
