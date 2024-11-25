"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Header from "../../components/header";
import Footer from "../../components/footer";
import BtnCriarVagas from "../../components/btnCriarVagas";
import { FaImage } from "react-icons/fa6";

// Função para obter as vagas armazenadas no localStorage
const obterVagas = () => {
  const vagas = localStorage.getItem("vagas");
  return vagas ? JSON.parse(vagas) : [];
};

export default function CriarVagas() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [imageBackground, setImageBackground] = useState<string | null>(null);
  const [nomeEmpresa, setNomeEmpresa] = useState("");
  const [cargo, setCargo] = useState("");
  const [emailEmpresa, setEmailEmpresa] = useState(""); // Novo estado para o email
  const cepInputRef = useRef<HTMLInputElement | null>(null);
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const formatCep = (value: string) => {
    const onlyNumbers = value.replace(/\D/g, "");
    return onlyNumbers.replace(/(\d{5})(\d{0,3})/, "$1-$2").trim();
  };

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const formattedValue = formatCep(inputValue);
    setCep(formattedValue);

    if (debounceTimeout) clearTimeout(debounceTimeout);
    setDebounceTimeout(
      setTimeout(() => {
        buscarEndereco(formattedValue);
      }, 1000)
    );
  };

  const buscarEndereco = async (cepInput: string) => {
    const cepFormatado = cepInput.replace("-", "");
    if (cepFormatado.length !== 8) return;

    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${cepFormatado}/json/`
      );
      if (response.data.erro) {
        alert("CEP inexistente!");
        setCep("");
        setEndereco("");
        setBairro("");
        setCidade("");
        setEstado("");
        if (cepInputRef.current) {
          cepInputRef.current.focus();
        }
      } else {
        setEndereco(response.data.logradouro);
        setBairro(response.data.bairro);
        setCidade(response.data.localidade);
        setEstado(response.data.uf);
      }
    } catch (error) {
      console.error("Error fetching data from ViaCEP:", error);
      alert("Erro ao buscar o CEP. Tente novamente.");
    }
  };

  useEffect(() => {
    return () => {
      if (debounceTimeout) clearTimeout(debounceTimeout);
    };
  }, [debounceTimeout]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result && typeof e.target.result === "string") {
          setImageBackground(e.target.result);
        }
      };
      reader.readAsDataURL(file);

      event.target.value = "";
    }
  };

  const handleSubmit = () => {
    // Verifica se todos os campos estão preenchidos
    if (
      !nomeEmpresa ||
      !cargo ||
      !cep ||
      !endereco ||
      !bairro ||
      !cidade ||
      !estado ||
      !imageBackground ||
      !emailEmpresa // Verifica se o email foi preenchido
    ) {
      if (!imageBackground) {
        alert("Adicione uma imagem");
      } else {
        alert("Por favor, preencha todos os campos antes de enviar.");
      }
      return;
    }

    // Gerar um ID aleatório para a vaga
    const id = Math.random().toString(36).substring(2, 15);

    const novaVaga = {
      nomeEmpresa,
      cargo,
      endereco,
      bairro,
      cidade,
      estado,
      cep, // Adiciona o campo "cep" no objeto novaVaga
      emailEmpresa, // Adiciona o email no objeto novaVaga
      id,
      imagem: imageBackground,
    };

    // Adicionar a nova vaga ao localStorage
    const vagasExistentes = obterVagas();
    vagasExistentes.push(novaVaga);
    localStorage.setItem("vagas", JSON.stringify(vagasExistentes));

    // Exibir no console as vagas, incluindo o novo campo "cep"
    console.log("Vagas criadas:", vagasExistentes);

    alert("Vaga criada com sucesso!");

    // Limpar os campos após a criação da vaga
    setNomeEmpresa("");
    setCargo("");
    setCep("");
    setEndereco("");
    setBairro("");
    setCidade("");
    setEstado("");
    setImageBackground(null);
    setEmailEmpresa(""); // Limpar o campo de email
  };

  return (
    <>
      <Header />
      <section id='homeVagas'>
        <div className='container'>
          <div className='toggleContainer'></div>
        </div>

        <div className='w-full flex items-center justify-around flex-wrap'>
          <div className='inline-block bg-white shadow-md p-5 m-5 rounded-lg w-[300px] h-[450px]'>
            <div
              className={`boxImgEmpresa flex items-center justify-center border-2 border-dashed border-gray-300 p-5 w-[80px] h-[80px] rounded-[10px] text-center cursor-pointer mx-auto transition-colors duration-300 ease-in-out`}
              style={{
                backgroundImage: imageBackground
                  ? `url(${imageBackground})`
                  : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {!imageBackground && (
                <label
                  htmlFor='imagemEmpresa'
                  className='flex flex-col items-center text-[18px] text-corDestaqueHover hover:text-corDestaque cursor-pointer w-full h-full justify-center rounded-[10px]'
                >
                  <i className='fa-regular fa-image text-[50px] mb-[10px] transition-colors duration-300 ease-in-out text-corDestaqueHover hover:text-corDestaque'>
                    <FaImage />
                  </i>
                </label>
              )}
              <input
                className='imagemEmpresa hidden'
                id='imagemEmpresa'
                type='file'
                name='imagemEmpresa'
                accept='image/*'
                onChange={handleImageChange}
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
                value={nomeEmpresa}
                onChange={(e) => setNomeEmpresa(e.target.value.toUpperCase())}
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
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
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
                maxLength={9}
                value={cep}
                onChange={handleCepChange}
                ref={cepInputRef}
              />
              <input
                className='enderecoEmpresa'
                type='text'
                name='enderecoEmpresa'
                placeholder='Endereço'
                title='Endereço'
                required
                value={endereco}
                readOnly
              />
              <input
                className='bairroEmpresa'
                type='text'
                name='bairroEmpresa'
                placeholder='Bairro'
                title='Bairro'
                required
                value={bairro}
                readOnly
              />
              <input
                className='cidadeEmpresa'
                type='text'
                name='cidadeEmpresa'
                placeholder='Cidade'
                title='Cidade'
                required
                value={cidade}
                readOnly
              />
              <input
                className='estadoEmpresa'
                type='text'
                name='estadoEmpresa'
                placeholder='Estado'
                title='Estado'
                required
                value={estado}
                readOnly
              />
              <input
                className='emailEmpresa'
                type='email'
                id='emailEmpresa'
                placeholder='Email'
                title='Email'
                required
                value={emailEmpresa}
                onChange={(e) => setEmailEmpresa(e.target.value)}
                maxLength={30}
              />
            </div>
            <BtnCriarVagas onClick={handleSubmit} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
