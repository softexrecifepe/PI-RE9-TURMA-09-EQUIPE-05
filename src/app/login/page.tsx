import Header from "../../components/header"
import Footer from "../../components/footer"
import { IoSearch } from "react-icons/io5";
import Link from "next/link";

export default function Login() {

  return (
    <>
      <Header />
      <section className="pt-20 w-auto min-h-screen bg-cover flex flex-col bg-login-image">
        <div className="max-w-sm p-6 border rounded-lg border-corDestaqueTitulo ml-12">
          <form className="space-y-4">
            <input type="text" id="email" placeholder="Digite seu email" className="w-full p-2 border-b-2 border-corTextoBotao placeholder-corTextoBotao italic focus:outline-none bg-transparent" maxLength={30} />
            <input type="text" id="senha" placeholder="Digite sua senha" className="w-full p-2 border-b-2 border-corTextoBotao placeholder-corTextoBotao italic  focus:outline-none bg-transparent" maxLength={30} /> 
            <button type="submit" className="w-full bg-corPrimaria text-corTextoBotao py-2 rounded-full hover:bg-corDestaqueTitulo">
              <span className="inline-flex items-center">
                <i className="text-lg mr-1.5"><IoSearch /></i>
                Login
              </span>
            </button>
          </form>
        </div>
        <div className="pl-20 p-6 flex items-center">
          <p className="text-base font-sans text-black cursor-pointer hover:">Ainda não é cadastrado?</p> <Link href="/cadastro" className="text-base font sans text-red-600 font-bold ml-2  cursor-pointer hover:text-green-500">Clique aqui!</Link>
        </div>
      </section >
      <Footer />
    </>
  )
}
