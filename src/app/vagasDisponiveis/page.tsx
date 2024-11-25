"use client"; // Diretiva para garantir renderização no lado do cliente

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // Hook para acessar query params (parâmetros da URL)
import Header from "../../components/header"; // Componente de cabeçalho
import Footer from "../../components/footer"; // Componente de rodapé
import BtnEuQuero from "@/components/btnEuQuero"; // Componente do botão de ação "Eu quero"

// Definindo a interface para o tipo de Vaga
interface Vaga {
  empresa: string;
  cargo: string;
  endereco: {
    cep: string;
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
  };
  email: string;
  imagem: string;
}

// Interface de vaga armazenada no localStorage (pode ter campos ausentes)
interface VagaStorage {
  nomeEmpresa?: string;
  cargo?: string;
  cep?: string;
  endereco?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  emailEmpresa?: string;
  imagem?: string;
}

export default function VagasDisponiveis() {
  // Estado para armazenar as vagas disponíveis
  const [vagasDisponiveis, setVagasDisponiveis] = useState<Vaga[]>([]);

  // Estados para armazenar os filtros aplicados pela URL
  const [cargoFiltrado, setCargoFiltrado] = useState("");
  const [cidadeFiltrada, setCidadeFiltrada] = useState("");
  const [estadoFiltrado, setEstadoFiltrado] = useState("");

  // Hook para acessar os parâmetros da URL (query params)
  const searchParams = useSearchParams();

  // Efeito para atualizar os filtros com base nos parâmetros da URL
  useEffect(() => {
    if (searchParams) {
      // Obtém os parâmetros de cargo, cidade e estado da URL
      const queryCargo = searchParams.get("cargo");
      const queryCidade = searchParams.get("cidade");
      const queryEstado = searchParams.get("estado");

      // Atualiza os estados dos filtros se os parâmetros existirem
      if (queryCargo) setCargoFiltrado(queryCargo.toUpperCase());
      if (queryCidade) setCidadeFiltrada(queryCidade.toUpperCase());
      if (queryEstado) setEstadoFiltrado(queryEstado.toUpperCase());
    }
  }, [searchParams]); // Reexecuta quando os parâmetros de consulta mudam

  // Efeito para carregar as vagas armazenadas no localStorage
  useEffect(() => {
    const vagasArmazenadas = localStorage.getItem("vagas");

    if (vagasArmazenadas) {
      try {
        // Converte as vagas armazenadas em formato JSON para um array
        const vagasDinamicas: VagaStorage[] = JSON.parse(vagasArmazenadas);

        if (Array.isArray(vagasDinamicas)) {
          // Corrige os dados das vagas para garantir que todos os campos estão preenchidos
          const vagasCorrigidas = vagasDinamicas.map((vaga) => ({
            empresa: vaga.nomeEmpresa || "Empresa não informada",
            cargo: vaga.cargo || "Cargo não informado",
            endereco: {
              cep: vaga.cep?.trim() || "CEP não informado",
              rua: vaga.endereco || "Endereço não informado",
              bairro: vaga.bairro || "Bairro não informado",
              cidade: vaga.cidade || "Cidade não informada",
              estado: vaga.estado || "Estado não informado",
            },
            email: vaga.emailEmpresa || "Email não informado",
            imagem: vaga.imagem || "/placeholder.png", // Caso não haja imagem, usa a imagem placeholder
          }));

          // Filtra as vagas duplicadas com base em uma chave composta (nomeEmpresa, cargo, cep)
          const vagasUnicas = [
            ...new Map(
              [...vagasDisponiveis, ...vagasCorrigidas].map((vaga) => [
                `${vaga.empresa}-${vaga.cargo}-${vaga.endereco.cep}`, // Chave composta para garantir unicidade
                vaga,
              ])
            ).values(), // .values() extrai os valores (vagas únicas)
          ];

          // Atualiza o estado com as vagas únicas (sem duplicatas)
          setVagasDisponiveis(vagasUnicas);
        }
      } catch (error) {
        console.error("Erro ao carregar vagas do localStorage:", error);
      }
    }
  }, []); // Executa uma vez no carregamento da página

  return (
    <>
      <Header /> {/* Componente de cabeçalho */}
      <section id='homeVagas'>
        <div className='w-full flex items-center justify-around flex-wrap flex-col'>
          {/* Itera sobre as vagas disponíveis e aplica os filtros de cargo, cidade e estado */}
          {vagasDisponiveis
            .filter(
              (vaga) =>
                (cargoFiltrado === "" ||
                  vaga.cargo.toUpperCase().includes(cargoFiltrado)) && // Filtra pelo cargo
                (cidadeFiltrada === "" ||
                  vaga.endereco.cidade
                    .toUpperCase()
                    .includes(cidadeFiltrada)) && // Filtra pela cidade
                (estadoFiltrado === "" ||
                  vaga.endereco.estado.toUpperCase().includes(estadoFiltrado)) // Filtra pelo estado
            )
            .map((vaga, index) => (
              <div
                key={index}
                className='inline-block bg-white shadow-md p-5 m-5 rounded-lg w-[300px] h-[430px]'
              >
                {/* Exibe a imagem da empresa */}
                <div
                  className='flex items-center justify-center p-5 w-[80px] h-[80px] text-center cursor-pointer mx-auto'
                  style={{
                    backgroundImage: `url(${vaga.imagem})`, // Define a imagem como fundo
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "10px", // Arredonda as bordas da imagem
                  }}
                ></div>

                {/* Exibe o nome da empresa */}
                <div className='boxEmpresa'>
                  <p className='nomeEmpresa'>{vaga.empresa}</p>
                </div>

                {/* Exibe o cargo da vaga */}
                <div className='boxCargo'>
                  <p className='nomeCargo'>{vaga.cargo}</p>
                </div>

                {/* Exibe o endereço completo da vaga */}
                <div className='boxEnderecoEmpresa'>
                  <p className='enderecoEmpresa'>{vaga.endereco.rua}</p>
                  <p className='bairroEmpresa'>
                    Bairro: {vaga.endereco.bairro}
                  </p>
                  <p className='cidadeEmpresa'>
                    Cidade: {vaga.endereco.cidade}
                  </p>
                  <p className='estadoEmpresa'>
                    Estado: {vaga.endereco.estado}
                  </p>

                  {/* Exibe o CEP e marca com vermelho se não for informado */}
                  <p className='cepEmpresa'>
                    CEP:{" "}
                    {vaga.endereco.cep === "CEP não informado" ? (
                      <span style={{ color: "red" }}>{vaga.endereco.cep}</span>
                    ) : (
                      vaga.endereco.cep
                    )}
                  </p>
                </div>

                {/* Exibe o email de contato da empresa */}
                <p className='emailEmpresa'>{vaga.email}</p>

                {/* Botão "Eu Quero" para ação */}
                <div className='mt-auto'>
                  <BtnEuQuero />
                </div>
              </div>
            ))}
        </div>
      </section>
      <Footer /> {/* Componente de rodapé */}
    </>
  );
}
