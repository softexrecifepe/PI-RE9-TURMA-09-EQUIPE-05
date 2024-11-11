"use client"; // Adicionando a diretiva 'use client' no topo do arquivo

import { useState } from "react"; // Importando o hook useState
import Header from "../components/header";
import Footer from "../components/footer";
import Button from "@/components/button";
import ToggleBrowser from "@/components/toggle";

export default function Home() {
  // Estados para armazenar as mensagens de alerta
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState(""); // Para diferenciar tipos de alerta

  // Função para criar o alerta com tipos explicitamente definidos
  const createAlert = (
    message: string,
    type: "error" | "success" = "error"
  ) => {
    setAlertMessage(message);
    setAlertType(type);
  };

  // Função para validar os inputs
  const validateInputs = () => {
    const cargoInput = document.getElementById(
      "cargo"
    ) as HTMLInputElement | null;
    const cepInput = document.getElementById(
      "filtraCep"
    ) as HTMLInputElement | null;

    // Verificar se os inputs existem
    if (!cargoInput || !cepInput) {
      createAlert("Erro ao acessar os campos!", "error");
      return false;
    }

    // Valida o cargo (aceita apenas letras e caracteres especiais)
    if (cargoInput.value.trim() === "") {
      cargoInput.focus(); // Aponta o cursor para o campo cargo
      createAlert("Campo obrigatório! Digite o cargo", "error");
      return false;
    } else if (
      /[^a-zA-ZáàãâäéèêëíìîïóòõôöúùûüçÇ!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~ ]/g.test(
        cargoInput.value
      )
    ) {
      // Verifica se o valor contém caracteres não permitidos
      cargoInput.focus();
      createAlert(
        "O cargo deve conter apenas letras e caracteres especiais",
        "error"
      );
      return false;
    }

    // Valida o CEP (formato xxxxx-xxx e apenas números)
    const cepValue = cepInput.value.replace("-", ""); // Remove o hífen para validação
    if (cepValue.trim() === "") {
      cepInput.focus(); // Aponta o cursor para o campo CEP
      createAlert("Campo obrigatório! Digite o seu CEP", "error");
      return false;
    } else if (!/^\d{5}-\d{3}$/.test(cepInput.value)) {
      // Verifica o formato do CEP
      cepInput.focus();
      createAlert("O CEP deve ter o formato xxxxx-xxx", "error");
      return false;
    }

    return true;
  };

  // Função chamada ao clicar no botão de busca
  const handleSearch = () => {
    if (validateInputs()) {
      createAlert("Busca realizada com sucesso!", "success");
    }
  };

  // Função para formatar o CEP ao digitar
  const formatCep = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, ""); // Remove tudo que não for número
    if (value.length <= 5) {
      event.target.value = value; // Apenas números até 5 dígitos
    } else {
      event.target.value = `${value.slice(0, 5)}-${value.slice(5, 8)}`; // Adiciona o hífen
    }
  };

  // Função para fechar o alerta e mover o cursor para o campo vazio
  const closeAlertAndFocus = () => {
    setAlertMessage(""); // Remove a mensagem de alerta
    const cargoInput = document.getElementById(
      "cargo"
    ) as HTMLInputElement | null;
    const cepInput = document.getElementById(
      "filtraCep"
    ) as HTMLInputElement | null;

    // Verifica qual campo está vazio e foca nele
    if (cargoInput && cargoInput.value.trim() === "") {
      cargoInput.focus();
    } else if (cepInput && cepInput.value.trim() === "") {
      cepInput.focus();
    }
  };

  return (
    <>
      <Header />

      <section
        id='homeImg'
        className='w-full flex flex-wrap px-[50px] py-[100px] bg-center bg-no-repeat bg-cover h-screen overflow-hidden items-start justify-start'
        style={{ backgroundImage: "url('../imagens/img20.png')" }}
      >
        <div className='container'>
          <div className='toggleContainer'></div>

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
              onInput={(e: React.FormEvent<HTMLInputElement>) => {
                // Limitar a entrada a letras e caracteres especiais
                const input = e.target as HTMLInputElement;
                input.value = input.value.replace(
                  /[^a-zA-ZáàãâäéèêëíìîïóòõôöúùûüçÇ!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~ ]/g,
                  ""
                );
              }}
            />

            <input
              type='text'
              id='filtraCep'
              placeholder='Digite seu CEP'
              title='Digite seu CEP'
              required
              maxLength={9}
              onChange={formatCep} // Formatar o CEP enquanto digita
            />

            {/* Passando a função handleSearch como onClick */}
            <Button onClick={handleSearch} />

            {/* Exibição do alerta se houver mensagem */}
            {alertMessage && (
              <div
                className={`alerta ${
                  alertType === "success" ? "alerta-success" : "alerta-error"
                } animate__animated animate__rubberBand`}
              >
                <p>{alertMessage}</p>
                <button className='btnOk' onClick={closeAlertAndFocus}>
                  Ok!
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <ToggleBrowser />
    </>
  );
}
