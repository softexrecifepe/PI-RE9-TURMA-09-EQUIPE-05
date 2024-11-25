"use client"; // Diretiva para garantir renderização no lado do cliente

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "animate.css"; // Biblioteca de animações
import Header from "../components/header"; // Importação do componente de cabeçalho
import Footer from "../components/footer"; // Importação do componente de rodapé
import Button from "@/components/button"; // Importação do botão reutilizável

interface Vaga {
  cargo: string;
  local: string;
}

export default function Home() {
  const router = useRouter(); // Hook do Next.js para manipulação de navegação
  const [alertMessage, setAlertMessage] = useState(""); // Estado para armazenar a mensagem do alerta
  const [alertType, setAlertType] = useState(""); // Estado para armazenar o tipo do alerta (erro ou sucesso)
  const [isMounted, setIsMounted] = useState(false); // Estado para verificar se o componente foi montado (evitar erros de SSR)
  const [vagasDisponiveis, setVagasDisponiveis] = useState<Vaga[]>([]); // Estado para armazenar as vagas disponíveis

  // Hook useEffect para realizar a verificação de vagas quando o componente for montado
  useEffect(() => {
    setIsMounted(true); // Confirma que o componente foi montado
    const vagasArmazenadas = localStorage.getItem("vagas"); // Tenta obter as vagas armazenadas no localStorage

    if (vagasArmazenadas) {
      setVagasDisponiveis(JSON.parse(vagasArmazenadas)); // Se houver vagas, as define no estado
    } else {
      setVagasDisponiveis([]); // Se não houver vagas, define um array vazio
    }
  }, []);

  // Função para criar alertas (erro ou sucesso)
  const createAlert = (
    message: string,
    type: "error" | "success" = "error"
  ) => {
    setAlertMessage(message); // Define a mensagem do alerta
    setAlertType(type); // Define o tipo de alerta (erro ou sucesso)
  };

  // Função para validar os campos de entrada (cargo e CEP)
  const validateInputs = async () => {
    const cargoInput = document.getElementById("cargo") as HTMLInputElement;
    const cepInput = document.getElementById("filtraCep") as HTMLInputElement;

    if (!cargoInput || !cepInput) {
      createAlert("Erro ao acessar os campos!", "error");
      return false;
    }

    // Verifica se o campo 'cargo' está vazio
    if (cargoInput.value.trim() === "") {
      cargoInput.focus();
      createAlert("Campo obrigatório! Digite o cargo", "error");
      return false;
    }

    // Verifica se o campo 'CEP' está vazio
    if (cepInput.value.trim() === "") {
      cepInput.focus();
      createAlert("Campo obrigatório! Digite o seu CEP", "error");
      return false;
    }

    const cep = cepInput.value.replace("-", "").trim(); // Remove o hífen do CEP
    const isValidCep = await validateCep(cep); // Valida o CEP

    // Se o CEP não for válido, exibe uma mensagem de erro
    if (!isValidCep) {
      createAlert("Por favor, digite um CEP válido.", "error");
      cepInput.value = "";
      cepInput.focus();
      return false;
    }

    return true;
  };

  // Função para validar o CEP, verificando se ele existe na API
  const validateCep = async (cep: string): Promise<boolean> => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      return !data.erro; // Retorna 'true' se não houver erro no CEP
    } catch {
      return false; // Se houver erro na requisição, retorna 'false'
    }
  };

  // Função que é chamada ao clicar no botão de busca
  const handleSearch = async () => {
    if (await validateInputs()) {
      const cargoInput = document.getElementById("cargo") as HTMLInputElement;
      const cargo = cargoInput.value.trim().toUpperCase();
      const cepInput = document.getElementById("filtraCep") as HTMLInputElement;
      const cidadeInput = document.getElementById(
        "filtraCidade"
      ) as HTMLInputElement;
      const estadoInput = document.getElementById(
        "filtraEstado"
      ) as HTMLInputElement;

      const cidade = cidadeInput.value.trim().toUpperCase();
      const estado = estadoInput.value.trim().toUpperCase();

      // Adicionando os parâmetros 'cidade' e 'estado' na URL
      const queryParams = new URLSearchParams();
      queryParams.set("cargo", cargo);
      if (cidade) queryParams.set("cidade", cidade);
      if (estado) queryParams.set("estado", estado);

      // Filtra as vagas de acordo com o cargo
      const vagasEncontradas = vagasDisponiveis.filter((vaga) =>
        vaga.cargo.toUpperCase().includes(cargo)
      );

      if (vagasEncontradas.length > 0) {
        // Se encontrar vagas, navega para a página com as vagas filtradas
        router.push(`/vagasDisponiveis?${queryParams.toString()}`);
      } else {
        // Se não encontrar vagas, exibe o alerta e limpa os campos
        createAlert("Vaga indisponível! Tente outro dia.", "error");
        cargoInput.value = "";
        cepInput.value = "";
        cidadeInput.value = "";
        estadoInput.value = "";
        cargoInput.focus();
      }
    }
  };

  // Função para formatar o CEP ao digitar
  const formatCep = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "");
    if (value.length <= 5) {
      event.target.value = value; // Caso o CEP tenha menos de 5 caracteres, mantemos o formato simples
    } else {
      event.target.value = `${value.slice(0, 5)}-${value.slice(5, 8)}`; // Adiciona o hífen após 5 caracteres
    }
  };

  // Função chamada ao alterar o valor do CEP
  const handleCepChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const cep = event.target.value.replace("-", "").trim();

    // Se o CEP tiver 8 caracteres, tenta buscar a cidade e o estado
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (!data.erro) {
          const cidadeInput = document.getElementById(
            "filtraCidade"
          ) as HTMLInputElement;
          const estadoInput = document.getElementById(
            "filtraEstado"
          ) as HTMLInputElement;

          cidadeInput.value = data.localidade || ""; // Preenche a cidade
          estadoInput.value = data.uf || ""; // Preenche o estado
        } else {
          createAlert(
            "CEP não encontrado. Verifique e tente novamente.",
            "error"
          );
        }
      } catch {
        createAlert("Erro ao buscar CEP. Tente novamente.", "error");
      }
    }
  };

  // Função para fechar o alerta
  const closeAlert = () => setAlertMessage("");

  if (!isMounted) {
    return null; // Evita renderização no lado do servidor
  }

  return (
    <>
      <Header />
      <section
        id='homeImg'
        className='w-full flex flex-wrap px-[50px] py-[100px] bg-center bg-no-repeat bg-cover h-screen overflow-hidden items-start justify-start'
        style={{ backgroundImage: "url('../imagens/img20.png')" }}
      >
        <div className='container'>
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
              onChange={formatCep}
              onBlur={handleCepChange} // Chamada ao desfocar do campo
            />
            <input
              type='text'
              id='filtraCidade'
              placeholder='Cidade'
              title='Cidade'
              required
              maxLength={30}
              style={{ display: "none" }} // Campo 'Cidade' oculto
            />
            <input
              type='text'
              id='filtraEstado'
              placeholder='Estado'
              title='Estado'
              required
              maxLength={30}
              style={{ display: "none" }} // Campo 'Estado' oculto
            />
            <Button onClick={handleSearch} />
            {alertMessage && (
              <div
                className={`alerta ${
                  alertType === "success" ? "alerta-success" : "alerta-error"
                } animate__animated animate__rubberBand`}
              >
                <p>{alertMessage}</p>
                <button className='btnOk' onClick={closeAlert}>
                  Ok!
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
