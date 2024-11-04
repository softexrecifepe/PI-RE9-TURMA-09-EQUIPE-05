import Header from "@/components/header";
import Footer from "@/components/footer";
import BtnCriarVagas from "@/components/btnCriarVagas";
import { FaImage } from "react-icons/fa6";

export default function CriarVagas() {
  return (
    <>
      <Header />
      <section id='homeVagas'>
        <div className='container'>
          <div className='toggleContainer'></div>
        </div>

        <div className='w-full flex items-center justify-around flex-wrap'>
          <div className='inline-block bg-white shadow-md p-5 m-5 rounded-lg w-[300px] h-[400px]'>
            <div className='flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-corDestaque p-5 w-[80px] h-[80px] rounded-[10px] text-center cursor-pointer mx-auto bg-corDestaquePricipalMedial transition-colors duration-300 ease-in-out'>
              <label
                htmlFor='imagemEmpresa'
                className='flex flex-col items-center text-[18px] text-corDestaqueHover hover:text-corDestaque cursor-pointer'
              >
                <FaImage className='text-[50px] mb-[10px] transition-colors duration-300 ease-in-out text-corDestaqueHover hover:text-corDestaque' />
              </label>
              <input
                className='hidden'
                id='imagemEmpresa'
                type='file'
                name='imagemEmpresa'
                accept='image/*'
                required
              />
            </div>
            <div className='boxEmpresa'>
              <input
                className='nomeEmpresa'
                type='text'
                name='nomeEmpresa'
                placeholder='Nome'
                title='Nome'
                required
              />
            </div>
            <div className='boxCargo'>
              <input
                className='nomeCargo'
                type='text'
                name='cargoEmpresa'
                placeholder='Cargo'
                title='Cargo'
                required
              />
            </div>
            <div className='boxEnderecoEmpresa'>
              <input
                type='text'
                id='cepEmpresa'
                className='cepEmpresa'
                placeholder='CEP'
                title='CEP Empresa'
                required
                maxLength={9} // Corrigido para 9 caracteres (formato de CEP no Brasil)
                pattern='\d{5}-\d{3}' // Padrão atualizado
              />

              <input
                className='enderecoEmpresa'
                type='text'
                name='enderecoEmpresa'
                placeholder='Endereço:'
                title='Endereço:'
                required
                maxLength={30}
              />

              <input
                className='bairroEmpresa'
                type='text'
                name='bairroEmpresa'
                placeholder='Bairro:'
                title='Bairro:'
                required
                maxLength={30}
              />

              <input
                className='cidadeEmpresa'
                type='text'
                name='cidadeEmpresa'
                placeholder='Cidade:'
                title='Cidade:'
                required
                maxLength={30}
              />

              <input
                className='idEmpresa'
                type='text'
                name='idEstado'
                placeholder='ID:'
                title='ID:'
                required
                style={{ display: "none" }}
              />
            </div>
           <BtnCriarVagas />
          </div>
        </div>
      </section>
     <Footer />
    </>
  );
}
