import Header from "../components/header";
import Footer from "../components/footer";
import Button from "@/components/button";
import ToggleBrowser from "@/components/toggle";

export default function Home() {
  return (
    <>
      <Header />
      

      <section
        id = 'homeImg'
        className='w-full flex flex-wrap px-[50px] py-[100px] bg-center bg-no-repeat bg-cover h-screen overflow-hidden items-start justify-start'
        style={{ backgroundImage: "url('../imagens/img20.png')" }}
      >
        <div className='container'>
          <div className='toggleContainer'></div>

          <div className='w-full h-auto py-5'>
            <h3>Digite seus dados e veja as vagas mais próximas à você!</h3>
          </div>

          <div className='boxPesquisa'>
            <input
              type='text'
              id='cargo'
              placeholder='Cargo desejado'
              title='Digite sua profissão'
              required
              maxLength={30}
            />

            <input
              type='text'
              id='filtraCep'
              placeholder='Digite seu CEP'
              title='Digite seu CEP'
              required
              maxLength={9}
            />
            <Button />
          </div>
        </div>
      </section>
      <Footer />
      <ToggleBrowser />
    </>
  );
}
