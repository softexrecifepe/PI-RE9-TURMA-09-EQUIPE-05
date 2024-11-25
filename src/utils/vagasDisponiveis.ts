"use client";

// Definição da interface da vaga
interface Vaga {
  nomeEmpresa: string;
  cargo: string;
  endereco: string;
  bairro: string;
  cidade: string;
  estado: string;
  id: string;
  imagem: string | null;
}

// Função para adicionar uma nova vaga ao array de vagas
export const adicionarVaga = (novaVaga: Vaga) => {
  // Recupera as vagas atuais armazenadas no localStorage, ou um array vazio se não houver
  const vagas = JSON.parse(localStorage.getItem("vagas") || "[]");
  
  // Adiciona a nova vaga ao array
  vagas.push(novaVaga);
  
  // Salva o array atualizado de volta no localStorage
  localStorage.setItem("vagas", JSON.stringify(vagas));
};

// Função para obter todas as vagas armazenadas no localStorage
export const obterVagas = (): Vaga[] => {
  const vagas = JSON.parse(localStorage.getItem("vagas") || "[]");
  return vagas;
};
