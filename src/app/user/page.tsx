import Footer from "@/components/footer"; // Corrigido para maiúsculas
import Header from "@/components/header"; // Corrigido para maiúsculas
import Link from "next/link"; // Importando o componente Link do Next.js
import { MdOutlineVisibilityOff } from "react-icons/md";

export default function Login() {
  return (
    <>
      <Header />

      <section
        id='loginImg'
        className='w-full flex flex-wrap px-[50px] py-[100px] bg-center bg-no-repeat bg-cover h-screen overflow-hidden items-start justify-start'
        style={{ backgroundImage: "url('../imagens/img21.png')" }}
      >
        <div className='container'>
          <div className='toggleContainer'></div>

          <div className='boxPesquisa'>
            <form action='' method='POST'>
              <input
                type='email'
                id='email'
                placeholder='Digite seu email'
                title='Digite seu email'
                required
                maxLength={30}
              />

              <div className='boxSenha'>
                <input
                  type='password'
                  id='senha'
                  placeholder='Digite sua senha'
                  title='Digite sua senha'
                  required
                  maxLength={20}
                />
                <i className='fa-regular fa-eye-slash'>
                  {" "}
                  <MdOutlineVisibilityOff />
                </i>
              </div>

              <button type='submit' className='btn'>
                <span className='btnText'>Login</span>
              </button>
            </form>
          </div>

          <div className='boxH3'>
            <span className='txtBranco'>Ainda não é cadastrado?</span>
            <Link href='cadastro'>
              {" "}
              {/* Usando o Link do Next.js para navegação */}
              <span className='cliqueAqui'> Clique aqui!</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
