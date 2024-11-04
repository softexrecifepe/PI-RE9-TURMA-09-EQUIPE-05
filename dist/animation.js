"use strict";
/* Customizando Padrão - Filtrar Cep */
const toggleBrowser = () => {
    const cargoInput = document.getElementById("cargo");
    const cepInput = document.getElementById("filtraCep"); // Renomeado para "filtraCep"
    const boxPesquisa = document.querySelector(".boxPesquisa"); // Substituindo o container pela boxPesquisa
    // Função para formatação e filtragem do CEP
    const filtraCep = (cep) => {
        let cepFiltrado = cep.replace(/\D/g, ""); // Remove qualquer caractere não numérico
        cepFiltrado = cepFiltrado.replace(/^(\d{5})(\d)/, "$1-$2"); // Formata o CEP para o padrão 00000-000
        return cepFiltrado;
    };
    // Listener para aplicar a formatação do CEP
    cepInput.addEventListener("input", (e) => {
        const target = e.target;
        target.value = filtraCep(target.value);
    });
    // Listener para restringir a entrada do campo "cargo" a letras e caracteres especiais
    cargoInput.addEventListener("input", (e) => {
        const target = e.target;
        // Remove números e mantém letras e caracteres especiais
        target.value = target.value.replace(/[^a-zA-ZÀ-ÿ\s\W]/g, "");
    });
    /*Alert Customizado*/
    // Função para criar alerta dinamicamente com animação
    const createAlert = (message) => {
        // Remove qualquer alerta existente
        const existingAlert = document.querySelector(".alerta");
        if (existingAlert) {
            boxPesquisa.removeChild(existingAlert); // Usando boxPesquisa
        }
        const alertDiv = document.createElement("div");
        alertDiv.classList.add("alerta", "logo", "animate__animated", "animate__rubberBand", "boxLogo");
        const alertMessage = document.createElement("p");
        alertMessage.textContent = message;
        const btnOk = document.createElement("button");
        btnOk.textContent = "Ok!";
        btnOk.classList.add("btnOk");
        // Listener para remover o alerta ao clicar no botão "Ok!"
        btnOk.addEventListener("click", () => {
            boxPesquisa.removeChild(alertDiv); // Usando boxPesquisa
        });
        alertDiv.appendChild(alertMessage);
        alertDiv.appendChild(btnOk);
        boxPesquisa.appendChild(alertDiv); // Usando boxPesquisa
    };
    // Função para validar se os campos estão preenchidos
    const validateInputs = () => {
        let isValid = true;
        // Valida o cargo primeiro
        if (cargoInput.value.trim() === "") {
            createAlert("Campo cargo obrigatório!");
            isValid = false;
            return isValid; // Retorna imediatamente para mostrar apenas o alerta do cargo
        }
        // Depois valida o CEP, se o cargo estiver preenchido
        const cepValue = cepInput.value.replace("-", ""); // Remove o hífen para validação
        if (cepValue.trim() === "" || cepValue.length !== 8) {
            createAlert("Campo CEP obrigatório!");
            isValid = false;
            return isValid;
        }
        return isValid;
    };
    // Listener para validar os campos no clique de busca
    const searchButton = document.getElementById("lupa");
    searchButton.addEventListener("click", () => {
        if (validateInputs()) {
            // Se todos os campos estiverem preenchidos, exibe o sucesso
            createAlert("Busca realizada com sucesso!");
        }
    });
};
// Executa a função ao carregar a página
window.onload = toggleBrowser;
document.addEventListener("DOMContentLoaded", toggleBrowser);
