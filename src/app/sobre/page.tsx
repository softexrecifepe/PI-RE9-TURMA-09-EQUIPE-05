import Header from "../../components/header";
import Footer from "../../components/footer";
import { SobreTxt } from "@/components/boxTxtSobre";
import { SobreImg } from "@/components/imgSobre";


export default function Sobre() {
  return (
    <>
      <Header />
      <section
        id='containerRow'
        className='w-full flex flex-wrap flex-row py-24 px-12 items-center justify-center bg-gradient-to-tr from-[#ff8b8b] via-[#fff5eb] to-[#fff6ee] bg-center bg-no-repeat bg-cover h-full overflow-hidden'
      >
        <div className='boxRow flex flex-wrap flex-row w-full h-auto'>
          
          <div className='toggleContainer'></div>

          <div className='boxTxt w-1/2 p-5 text-justify text-[var(--principal)]'>
            <h2>Sobre</h2>
            <SobreTxt />
          </div>
          <SobreImg />
        </div>
      </section>
      <Footer />
    </>
  );
}
