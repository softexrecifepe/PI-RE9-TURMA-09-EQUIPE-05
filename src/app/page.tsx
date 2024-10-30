import Header from "../components/header"
import Footer from "../components/footer"
import { IoSearch } from "react-icons/io5";

export default function Home() {

  return (
    <>
      <Header />
      <section className="w-auto min-h-screen bg-cover flex flex-col bg-home-image">
        <div>
          <p className="text-lg mb-7 font-bold mt-20 ml-12">Digite seus dados e veja as vagas <br /> mais próximas a você!</p>
        </div>
        <div className="max-w-sm p-6 border rounded-lg border-corDestaqueTitulo ml-12">
          <form className="space-y-4">
            <input type="text" id="profissao" placeholder="Digite sua profissão" className="w-full p-2 border-b-2 border-corTextoBotao placeholder-corTextoBotao italic focus:outline-none bg-transparent" maxLength={30} />
            <input type="text" id="cep" placeholder="Digite seu CEP" className="w-full p-2 border-b-2 border-corTextoBotao placeholder-corTextoBotao italic  focus:outline-none bg-transparent" maxLength={30} />
            <button type="submit" className="w-full bg-corPrimaria text-corTextoBotao py-2 rounded-full hover:bg-corDestaqueTitulo">
              <span className="inline-flex items-center">
                <i className="text-lg mr-1.5"><IoSearch /></i>
                Pesquisar
              </span>
            </button>
          </form>
        </div>
      </section >
      <Footer />
    </>
  )
}
