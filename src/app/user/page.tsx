"use client"; // Marcar o componente como Client Component
import { useState } from "react"; // Importando useState para gerenciar o estado
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md"; // Importando os dois ícones

export default function Login() {
  // Estado para controlar a visibilidade da senha
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Função para alternar a visibilidade da senha
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

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
                  type={passwordVisible ? "text" : "password"} // Alterna entre texto e senha
                  id='senha'
                  placeholder='Digite sua senha'
                  title='Digite sua senha'
                  required
                  maxLength={20}
                />
                <i
                  onMouseDown={togglePasswordVisibility} // Exibe a senha ao pressionar
                  onMouseUp={togglePasswordVisibility} // Reverte a visibilidade ao soltar
                  onMouseLeave={togglePasswordVisibility} // Reverte a visibilidade se o mouse sair
                  className='cursor-pointer'
                >
                  {passwordVisible ? (
                    <MdOutlineVisibility />
                  ) : (
                    <MdOutlineVisibilityOff />
                  )}
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
              <span className='cliqueAqui'> Clique aqui!</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
