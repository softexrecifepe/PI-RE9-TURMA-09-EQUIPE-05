"use client";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import BtnEuQuero from "@/components/btnEuQuero";

export default function VagasDisponiveis() {
  const [vagasDisponiveis, setVagasDisponiveis] = useState([
    {
      empresa: "GRANDE RECIFE",
      cargo: "Mecânico",
      endereco: {
        cep: "50030-150",
        rua: "Avenida Alfredo Lisboa",
        bairro: "Recife Antigo",
        cidade: "Recife",
        estado: "PE",
      },
      email: "contato@granderecife.com.br",
      imagem: "/logomarcas/granderecife.png",
    },
    {
      empresa: "BORBOREMA",
      cargo: "Motorista",
      endereco: {
        cep: "51130-220",
        rua: "Rua Almirante Saldanha da Gama",
        bairro: "Boa Viagem",
        cidade: "Recife",
        estado: "PE",
      },
      email: "contato@borborema.com.br",
      imagem: "/logomarcas/borborema.png",
    },
    {
      empresa: "RODOTUR",
      cargo: "Motorista",
      endereco: {
        cep: "53020-310",
        rua: "Av Dr Joaquim Nabuco",
        bairro: "Varadouro",
        cidade: "Olinda",
        estado: "PE",
      },
      email: "contato@rodotur.com.br",
      imagem: "/logomarcas/rodotur.png",
    },
    {
      empresa: "TIM",
      cargo: "Telefonista",
      endereco: {
        cep: "50070-075",
        rua: "Rua José de Alencar",
        bairro: "Boa Vista",
        cidade: "Recife",
        estado: "PE",
      },
      email: "contato@tim.com.br",
      imagem: "/logomarcas/tim.png",
    },
    {
      empresa: "CLARO",
      cargo: "Telefonista",
      endereco: {
        cep: "53020-310",
        rua: "Av Dr Joaquim Nabuco",
        bairro: "Varadouro",
        cidade: "Olinda",
        estado: "PE",
      },
      email: "contato@claro.com.br",
      imagem: "/logomarcas/claro.png",
    },
    {
      empresa: "VIVO",
      cargo: "Telefonista",
      endereco: {
        cep: "53020-310",
        rua: "Av Dr Joaquim Nabuco",
        bairro: "Varadouro",
        cidade: "Olinda",
        estado: "PE",
      },
      email: "contato@vivo.com.br",
      imagem: "/logomarcas/vivo.png",
    },
    {
      empresa: "SHOPPING RECIFE",
      cargo: "Gerente",
      endereco: {
        cep: "51020-900",
        rua: "R. Padre Carapuceiro",
        bairro: "Boa Viagem",
        cidade: "Recife",
        estado: "PE",
      },
      email: "contato@shoppingrecife.com.br",
      imagem: "/logomarcas/recife.png",
    },
    {
      empresa: "SHOPPING PATTEO",
      cargo: "Gerente",
      endereco: {
        cep: "53130-645",
        rua: "R. Carmelita Muniz de Araújo",
        bairro: "Casa Caiada",
        cidade: "Olinda",
        estado: "PE",
      },
      email: "contato@shoppingpatteo.com.br",
      imagem: "/logomarcas/patteo.png",
    },
    {
      empresa: "NOVO ATACAREJO",
      cargo: "Caixa",
      endereco: {
        cep: "50761-0005",
        rua: "Av. Gen. San Martin",
        bairro: "Bongi",
        cidade: "Recife",
        estado: "PE",
      },
      email: "contato@novoatacarejo.com.br",
      imagem: "/logomarcas/novo.png",
    },
    {
      empresa: "NOVO ATACAREJO",
      cargo: "Caixa",
      endereco: {
        cep: "52291-000",
        rua: "Av. da Recuperação",
        bairro: "Guabiraba",
        cidade: "Recife",
        estado: "PE",
      },
      email: "contato@novoatacarejo.com.br",
      imagem: "/logomarcas/novo.png",
    },
  ]);

  useEffect(() => {
    const vagasArmazenadas = localStorage.getItem("vagas");

    if (vagasArmazenadas) {
      try {
        const vagasDinamicas = JSON.parse(vagasArmazenadas);

        if (Array.isArray(vagasDinamicas)) {
          const vagasCorrigidas = vagasDinamicas.map((vaga) => ({
            empresa: vaga.nomeEmpresa || "Empresa não informada",
            cargo: vaga.cargo || "Cargo não informado",
            endereco: {
              cep: vaga.cep?.trim() || "CEP não informado", // Adicionado `.trim()` para evitar espaços extras
              rua: vaga.endereco || "Endereço não informado",
              bairro: vaga.bairro || "Bairro não informado",
              cidade: vaga.cidade || "Cidade não informada",
              estado: vaga.estado || "Estado não informado",
            },
            email: vaga.emailEmpresa || "Email não informado",
            imagem: vaga.imagem || "/placeholder.png",
          }));

          const vagasUnicas = [
            ...new Map(
              [...vagasDisponiveis, ...vagasCorrigidas].map((vaga) => [
                JSON.stringify(vaga),
                vaga,
              ])
            ).values(),
          ];

          setVagasDisponiveis(vagasUnicas);
        }
      } catch (error) {
        console.error("Erro ao carregar vagas do localStorage:", error);
      }
    }
  }, []); 

  return (
    <>
      <Header />
      <section id='homeVagas'>
        <div className='container'>
          <div className='toggleContainer'></div>
        </div>

        <div className='w-full flex items-center justify-around flex-wrap flex-col'>
          {vagasDisponiveis.map((vaga, index) => (
            <div
              key={index}
              className='inline-block bg-white shadow-md p-5 m-5 rounded-lg w-[300px] h-[430px]'
            >
              <div
                className='flex items-center justify-center p-5 w-[80px] h-[80px] text-center cursor-pointer mx-auto'
                style={{
                  backgroundImage: `url(${vaga.imagem})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "10px",
                }}
              ></div>

              <div className='boxEmpresa'>
                <p className='nomeEmpresa'>{vaga.empresa}</p>
              </div>

              <div className='boxCargo'>
                <p className='nomeCargo'>{vaga.cargo}</p>
              </div>

              <div className='boxEnderecoEmpresa'>
                <p className='enderecoEmpresa'>{vaga.endereco.rua}</p>
                <p className='bairroEmpresa'>Bairro: {vaga.endereco.bairro}</p>
                <p className='cidadeEmpresa'>Cidade: {vaga.endereco.cidade}</p>
                <p className='estadoEmpresa'>Estado: {vaga.endereco.estado}</p>

                <p className='cepEmpresa'>
                  CEP:{" "}
                  {vaga.endereco.cep === "CEP não informado" ? (
                    <span style={{ color: "red" }}>{vaga.endereco.cep}</span>
                  ) : (
                    vaga.endereco.cep
                  )}
                </p>
              </div>

              <p className='emailEmpresa'>{vaga.email}</p>
              <div className='mt-auto'>
                <BtnEuQuero />
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}