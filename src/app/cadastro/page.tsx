import Head from "next/head"; // Adicione isso se estiver usando Next.js
import Header from "../../components/header";
import Footer from "../../components/footer";
import BtnCadastrar from "@/components/btnCadastrar";
import BtnDownloads from "@/components/btnDownloads";

export default function Cadastro() {
  return (
    <>
      <Head>
        <link
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css'
          rel='stylesheet'
        />
        <link
          href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
          rel='stylesheet'
        />
      </Head>
      <Header />
      <section
        id='cadastroImg'
        className='w-full flex flex-wrap p-[100px_50px] bg-center bg-no-repeat bg-cover h-screen overflow-hidden items-start justify-start'
        style={{ backgroundImage: "url('../imagens/img22.png')" }}
      >
        <div className="container">
          <div className='toggleContainer'></div>
          <div className='boxCadastro'>
            <form action='' method='POST'>
              <input
                type='text'
                id='nome'
                placeholder='Nome'
                title='Nome'
                required
                maxLength={30}
                className=''
              />
              <input
                type='text'
                id='sobreNome'
                placeholder='Sobrenome'
                title='Sobrenome'
                required
                maxLength={30}
                className=''
              />
              <input
                type='email'
                id='email'
                placeholder='Email'
                title='Email'
                required
                maxLength={30}
                className=''
              />
              <input
                type='text'
                id='telefone'
                placeholder='Telefone'
                title='Telefone'
                required
                maxLength={15}
                pattern='\(\d{2}\) \d{5}-\d{4}'
                className=''
              />
              <input
                type='text'
                id='cep'
                placeholder='CEP'
                title='CEP'
                required
                maxLength={9}
                pattern='\d{5}-\d{3}'
                className=''
              />
              <input
                type='text'
                id='endereco'
                placeholder='Endereço'
                title='Endereço'
                required
                maxLength={30}
                className=''
              />
              <input
                type='text'
                id='bairro'
                placeholder='Bairro'
                title='Bairro'
                required
                maxLength={30}
                className=''
              />
              <input
                type='text'
                id='cidade'
                placeholder='Cidade'
                title='Cidade'
                required
                maxLength={30}
                className=''
              />
              <input
                type='text'
                id='estado'
                placeholder='Estado'
                title='Estado'
                required
                maxLength={30}
                className=''
              />

              <div className='boxSenha'>
                <input
                  type='password'
                  id='senha'
                  placeholder='Digite sua senha'
                  title='Digite sua senha'
                  required
                  maxLength={20}
                  className='flex-grow focus:outline-none'
                />
                <i className='fa-regular fa-eye-slash text-gray-500 ml-2'></i>
              </div>

              <div className='boxSenha'>
                <input
                  type='password'
                  id='repitaSenha'
                  placeholder='Repita a sua senha'
                  title='Repita a sua senha'
                  required
                  maxLength={20}
                  className='flex-grow focus:outline-none'
                />
                <i className='fa-regular fa-eye-slash text-gray-500 ml-2'></i>
              </div>

              <div className='boxButton'>
                <BtnDownloads />
                <BtnCadastrar />
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
