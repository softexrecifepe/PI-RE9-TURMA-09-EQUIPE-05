"use strict";

var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };

function formularioBrowser() {
  // Função para alternar a visibilidade da senha
  function togglePasswordVisibility(isVisible, eyeIcon) {
    const passwordFields = eyeIcon
      .closest(".boxSenha")
      ?.querySelectorAll('input[type="password"], input[type="text"]');
    passwordFields?.forEach((field) => {
      field.type = isVisible ? "text" : "password";
    });

    // Altera o ícone de olho
    if (isVisible) {
      eyeIcon.classList.remove("far", "fa-eye-slash");
      eyeIcon.classList.add("far", "fa-eye");
    } else {
      eyeIcon.classList.remove("far", "fa-eye");
      eyeIcon.classList.add("far", "fa-eye-slash");
    }
  }

  const eyeIcons = document.querySelectorAll(".boxSenha i");
  eyeIcons.forEach((eyeIcon) => {
    eyeIcon.addEventListener("mousedown", (event) => {
      togglePasswordVisibility(true, eyeIcon);
      event.preventDefault();
    });
    eyeIcon.addEventListener("mouseup", () => {
      togglePasswordVisibility(false, eyeIcon);
    });
    eyeIcon.addEventListener("mouseleave", () => {
      togglePasswordVisibility(false, eyeIcon);
    });
  });

  // Função de validação de senhas
  function validarSenhas() {
    const senha = document.getElementById("senha");
    const repitaSenha = document.getElementById("repitaSenha");
    if (!senha || !repitaSenha) {
      console.error("Um ou ambos os campos de senha não foram encontrados.");
      return;
    }
    if (senha.value && repitaSenha.value && senha.value !== repitaSenha.value) {
      alert("As senhas estão diferentes");
      repitaSenha.value = "";
      repitaSenha.classList.add("erro");
    } else {
      repitaSenha.classList.remove("erro");
    }
  }

  const botaoCadastrar = document.getElementById("cadastrar");
  botaoCadastrar?.addEventListener("click", validarSenhas);

  // Telefone
  document.getElementById("telefone")?.addEventListener("input", (event) => {
    const input = event.target;
    const errorMessage = document.getElementById("error-message");
    const formattedValue = telefonePadrao(input.value);
    input.value = formattedValue;
    const apenasDigitos = formattedValue.replace(/\D/g, "");
    if (errorMessage) {
      errorMessage.style.display =
        apenasDigitos.length === 11 ? "none" : "inline";
    }
  });

  function telefonePadrao(telefone) {
    const apenasDigitos = telefone.replace(/\D/g, "");
    const ddd = apenasDigitos.slice(0, 2);
    const parte1 = apenasDigitos.slice(2, 7);
    const parte2 = apenasDigitos.slice(7, 11);
    return `(${ddd}) ${parte1}-${parte2}`.trim();
  }

  // CEP
  function formatarCep(cep) {
    const apenasDigitos = cep.replace(/\D/g, "");
    return apenasDigitos.replace(/^(\d{5})(\d{3})$/, "$1-$2");
  }

  function validarCep(cep, errorMessage) {
    const apenasDigitos = cep.replace(/\D/g, "");
    if (errorMessage) {
      errorMessage.style.display =
        apenasDigitos.length === 8 ? "none" : "inline";
    }
  }

  document.getElementById("cep")?.addEventListener("input", (event) => {
    const input = event.target;
    const errorMessage = document.getElementById("error-message");
    input.value = formatarCep(input.value);
    validarCep(input.value, errorMessage);
  });

  document.querySelector(".cepEmpresa")?.addEventListener("input", (event) => {
    const input = event.target;
    const errorMessage = document.querySelector(".error-message-empresa");
    input.value = formatarCep(input.value);
    validarCep(input.value, errorMessage);
  });

  // Preenchimento automático do CEP
  function cepAutomatico(cep, isEmpresa = false) {
    return __awaiter(this, arguments, void 0, function* () {
      const cepLimpo = cep.replace(/\D/g, "");
      if (cepLimpo.length === 8) {
        try {
          const response = yield fetch(
            `https://viacep.com.br/ws/${cepLimpo}/json/`
          );
          const data = yield response.json();
          if (!data.erro) {
            preencherCampos(data, isEmpresa);
          } else {
            alert("CEP inexistente!");
          }
        } catch (error) {
          console.error("Erro ao buscar o CEP:", error);
        }
      }
    });
  }

  function preencherCampos(data, isEmpresa) {
    if (isEmpresa) {
      document.querySelector(".enderecoEmpresa").value = data.logradouro || "";
      document.querySelector(".bairroEmpresa").value = data.bairro || "";
      document.querySelector(".cidadeEmpresa").value = data.localidade || "";
      document.querySelector(".idEmpresa").value = data.uf || "";
    } else {
      document.getElementById("endereco").value = data.logradouro || "";
      document.getElementById("bairro").value = data.bairro || "";
      document.getElementById("cidade").value = data.localidade || "";
      document.getElementById("estado").value = data.uf || "";
    }
  }

  document.getElementById("cep")?.addEventListener("input", (event) => {
    const target = event.target;
    cepAutomatico(target.value);
  });

  document.querySelector(".cepEmpresa")?.addEventListener("input", (event) => {
    const target = event.target;
    cepAutomatico(target.value, true);
  });

  /* FORMULÁRIO BANCO DE DADOS
    const formCadastro = document.getElementById("formCadastro");
    formCadastro?.addEventListener("submit", async (event) => {
        event.preventDefault();

        const data = {
            nome: (document.getElementById("nome") as HTMLInputElement)?.value || "",
            sobreNome: (document.getElementById("sobreNome") as HTMLInputElement)?.value || "",
            email: (document.getElementById("email") as HTMLInputElement)?.value || "",
            telefone: (document.getElementById("telefone") as HTMLInputElement)?.value || "",
            cep: (document.getElementById("cep") as HTMLInputElement)?.value || "",
            endereco: (document.getElementById("endereco") as HTMLInputElement)?.value || "",
            bairro: (document.getElementById("bairro") as HTMLInputElement)?.value || "",
            cidade: (document.getElementById("cidade") as HTMLInputElement)?.value || "",
            estado: (document.getElementById("estado") as HTMLInputElement)?.value || "",
            senha: (document.getElementById("senha") as HTMLInputElement)?.value || "",
        };

        try {
            const response = await fetch("http://mahavidya.com.br/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            alert(result.message);
        } catch (error) {
            console.error("Erro ao enviar o formulário:", error);
            alert("Erro ao cadastrar usuário.");
        }
    });
    _______________________________________________________________________________________*/
}

// Executa a função ao carregar a página
document.addEventListener("DOMContentLoaded", formularioBrowser);
