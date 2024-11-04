// src/components/toggle/index.tsx
"use client"; // Adicione esta linha para marcar este componente como um Componente do Cliente
import React, { useEffect, useRef } from "react";

export default function ToggleBrowser() {
  // Define ref types as HTMLDivElement so TypeScript knows the types
  const toggleContainerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const criarMenuDinamico = () => {
      const toggleContainer = toggleContainerRef.current;
      if (!toggleContainer) return;

      const menuItems = [
        { href: "index.html", text: "HOME" },
        { href: "sobre.html", text: "SOBRE" },
        { href: "vagas.html", text: "VAGAS" },
        { href: "cadastro.html", text: "CADASTRO" },
        { href: "contato.html", text: "CONTATO" },
      ];

      const ul = document.createElement("ul");
      menuItems.forEach((item) => {
        const li = document.createElement("li"); // Mover a criação do <li> para cá
        const a = document.createElement("a");
        a.href = item.href;
        a.textContent = item.text; // Adicionando o texto diretamente no <a>
        li.appendChild(a); // Adicionando <a> dentro do <li>
        ul.appendChild(li); // Adicionando <li> dentro do <ul>
        li.style.opacity = "0";
        li.style.transform = "translateY(30px) scale(0.9) rotate(5deg)";
        li.style.transition = "transform 0.6s ease, opacity 0.6s ease";
      });
      toggleContainer.appendChild(ul);
    };

    const mostrarItensComFade = () => {
      const lis = toggleContainerRef.current?.querySelectorAll("ul li");
      lis?.forEach((li, index) => {
        setTimeout(() => {
          (li as HTMLElement).style.opacity = "1";
          (li as HTMLElement).style.transform =
            "translateY(0) scale(1) rotate(0deg)";
        }, index * 150);
      });
    };

    const esconderItensComFade = () => {
      const lis = toggleContainerRef.current?.querySelectorAll("ul li");
      lis?.forEach((li, index) => {
        setTimeout(() => {
          (li as HTMLElement).style.opacity = "0";
          (li as HTMLElement).style.transform =
            "translateY(30px) scale(0.9) rotate(5deg)";
        }, index * 150);
      });
    };

    const toggleAnimado = () => {
      const toggle = toggleRef.current;
      const toggleContainer = toggleContainerRef.current;

      if (!toggle || !toggleContainer) return;

      const spans = toggle.querySelectorAll("span");

      const handleToggleClick = () => {
        toggle.classList.toggle("active");
        if (toggle.classList.contains("active")) {
          spans[0].style.transform = "rotate(45deg)";
          spans[0].style.top = "12px";
          spans[1].style.opacity = "0";
          spans[2].style.transform = "rotate(-45deg)";
          spans[2].style.top = "12px";
          toggleContainer.style.width = "70%";
          toggleContainer.style.transition = "width 0.5s ease";
          toggleContainer.addEventListener(
            "transitionend",
            function onTransitionEnd(event) {
              if (event.propertyName === "width") {
                mostrarItensComFade();
                toggleContainer.removeEventListener(
                  "transitionend",
                  onTransitionEnd
                );
              }
            }
          );
        } else {
          spans[0].style.transform = "rotate(0deg)";
          spans[0].style.top = "0px";
          spans[1].style.opacity = "1";
          spans[2].style.transform = "rotate(0deg)";
          spans[2].style.top = "20px";
          esconderItensComFade();
          toggleContainer.style.width = "0";
          toggleContainer.style.transition = "none";
        }
      };

      toggle.addEventListener("click", handleToggleClick);

      const checkToggleVisibility = () => {
        if (window.innerWidth > 901) {
          toggle.style.display = "none";
          toggleContainer.style.display = "none";
        } else {
          toggle.style.display = "block";
          toggleContainer.style.display = "block";
        }
      };

      checkToggleVisibility();
      window.addEventListener("resize", checkToggleVisibility);

      return () => {
        toggle.removeEventListener("click", handleToggleClick);
        window.removeEventListener("resize", checkToggleVisibility);
      };
    };

    criarMenuDinamico();
    toggleAnimado();
  }, []);

  return (
    <div className='toggleContainer' ref={toggleContainerRef}>
      <div className='toggle' ref={toggleRef}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
