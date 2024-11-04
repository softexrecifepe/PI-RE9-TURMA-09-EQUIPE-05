"use strict";
function toggleBrawser() {
  // Função para criar dinamicamente o menu e aplicar animação
  function criarMenuDinamico() {
    const toggleContainer = document.querySelector(".toggleContainer");
    // Criar a lista <ul>
    const ul = document.createElement("ul");
    // Lista de itens do menu
    const menuItems = [
      { href: "index.html", text: "HOME" },
      { href: "sobre.html", text: "SOBRE" },
      { href: "vagas.html", text: "VAGAS" },
      { href: "cadastro.html", text: "CADASTRO" },
      { href: "contato.html", text: "CONTATO" },
    ];
    // Criar dinamicamente os links e itens do menu
    menuItems.forEach((item) => {
      const a = document.createElement("a");
      a.href = item.href;
      const li = document.createElement("li");
      li.textContent = item.text;
      a.appendChild(li);
      ul.appendChild(a);
      // Estilizar os itens para preparar a animação
      li.style.opacity = "0";
      li.style.transform = "translateY(30px) scale(0.9) rotate(5deg)";
      li.style.transition = "transform 0.6s ease, opacity 0.6s ease"; // Transições suaves
    });
    toggleContainer.appendChild(ul);
  }
  // Função para exibir os itens com animação
  function mostrarItensComFade() {
    const lis = document.querySelectorAll(".toggleContainer ul li");
    lis.forEach((li, index) => {
      setTimeout(() => {
        li.style.opacity = "1";
        li.style.transform = "translateY(0) scale(1) rotate(0deg)"; // Animação para posição e escala final
      }, index * 150); // Atraso entre a exibição de cada item
    });
  }
  // Função para ocultar os itens com animação inversa
  function esconderItensComFade() {
    const lis = document.querySelectorAll(".toggleContainer ul li");
    lis.forEach((li, index) => {
      setTimeout(() => {
        li.style.opacity = "0";
        li.style.transform = "translateY(30px) scale(0.9) rotate(5deg)"; // Voltar à posição e escala iniciais
      }, index * 150); // Atraso entre a ocultação de cada item
    });
  }
  // Função para animar o toggle e controlar a visibilidade
  function toggleAnimado() {
    const toggle = document.querySelector(".toggle");
    const toggleContainer = document.querySelector(".toggleContainer");
    const spans = toggle.querySelectorAll("span");
    const checkToggleVisibility = () => {
      if (window.innerWidth > 901) {
        toggle.style.display = "none";
        toggleContainer.style.display = "none";
      } else {
        toggle.style.display = "block";
        toggleContainer.style.display = "block";
      }
    };
    const handleToggleClick = () => {
      toggle.classList.toggle("active");
      if (toggle.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg)";
        spans[0].style.top = "12px";
        spans[1].style.opacity = "0"; // Ocultar a linha do meio
        spans[2].style.transform = "rotate(-45deg)";
        spans[2].style.top = "12px";
        // Abrir o toggleContainer com animação
        toggleContainer.style.width = "70%";
        toggleContainer.style.transition = "width 0.5s ease"; // Animação ao abrir
        // Adiciona o listener de transição para exibir os itens após a abertura completa
        toggleContainer.addEventListener(
          "transitionend",
          function onTransitionEnd(event) {
            if (event.propertyName === "width") {
              mostrarItensComFade(); // Exibir os itens da lista com a nova animação
              toggleContainer.removeEventListener(
                "transitionend",
                onTransitionEnd
              ); // Remove o listener após execução
            }
          }
        );
      } else {
        spans[0].style.transform = "rotate(0deg)";
        spans[0].style.top = "0px";
        spans[1].style.opacity = "1"; // Mostrar novamente a linha do meio
        spans[2].style.transform = "rotate(0deg)";
        spans[2].style.top = "20px";
        // Ocultar os itens antes de fechar
        esconderItensComFade();
        // Fechar o toggleContainer sem animação
        toggleContainer.style.width = "0"; // Define a largura para zero
        toggleContainer.style.transition = "none"; // Remove a transição para o fechamento
      }
    };
    // Adicionando o evento de clique ao toggle
    toggle.addEventListener("click", handleToggleClick);
    // Verificar a visibilidade inicial do toggle ao carregar a página
    checkToggleVisibility();
    // Adicionar um listener para ajustar a visibilidade ao redimensionar a janela
    window.addEventListener("resize", checkToggleVisibility);
  }
  // Executar a função de criação de menu ao carregar a página
  criarMenuDinamico();
  // Executar a função de animação do toggle quando o DOM estiver completamente carregado
  toggleAnimado();
}
// Executa a função ao carregar a página
//window.onload = toggleBrawser;
document.addEventListener("DOMContentLoaded", toggleBrawser);
