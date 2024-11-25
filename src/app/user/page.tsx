"use client"; // Garante renderização no lado do cliente

import Link from "next/link";
import CryptoJS from "crypto-js";
import "animate.css";
import { useState, useEffect } from "react";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useRouter } from "next/navigation"; // Importação do hook useRouter para navegação

// Definição de tipos para o usuário
interface Usuario {
  email: string;
  senha: string;
}

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [alertMessage, setAlertMessage] = useState(""); // Estado para o alerta
  const [alertType, setAlertType] = useState<"success" | "error" | null>(null); // Tipo de alerta

  const router = useRouter(); // Hook para navegação do Next.js

  // Verifica se o usuário já está logado
  useEffect(() => {
    const userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn") || "null");

    if (userLoggedIn) {
      setIsLoggedIn(true);
      router.push("/"); // Redireciona se já estiver logado
    }
  }, [router]);

  // Função para alternar a visibilidade da senha
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Função para exibir o alerta dentro da div 'boxPesquisa'
  const showAlert = (message: string, alertType: "success" | "error") => {
    setAlertMessage(message);
    setAlertType(alertType); // Define o tipo de alerta
  };

  // Lida com o envio do formulário de login
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      showAlert("Campo obrigatório! Digite seu email.", "error");
      return;
    }

    if (!senha) {
      showAlert("Campo obrigatório! Digite sua senha.", "error");
      return;
    }

    const usuarios: Usuario[] = JSON.parse(localStorage.getItem("usuarios") || "[]");

    const usuarioValido = usuarios.find((usuario) => usuario.email === email);

    if (!usuarioValido) {
      showAlert("Este email não está cadastrado!", "error");
      setEmail("");
      return;
    }

    const senhaValida =
      CryptoJS.SHA256(senha).toString(CryptoJS.enc.Base64) === usuarioValido.senha;

    if (!senhaValida) {
      showAlert("Senha inválida! Tente novamente.", "error");
      setSenha("");
      return;
    }

    // Salva os dados do usuário logado
    localStorage.setItem("userLoggedIn", JSON.stringify(usuarioValido));
    setEmail("");
    setSenha("");
    setIsLoggedIn(true);

    // Redireciona após o login bem-sucedido
    showAlert("Login bem-sucedido!", "success");
  };

  return (
    <>
      <Header />
      <section
        id="loginImg"
        className="w-full flex flex-wrap px-[50px] py-[100px] bg-center bg-no-repeat bg-cover h-screen overflow-hidden items-start justify-start"
        style={{ backgroundImage: "url('../imagens/img21.png')" }}
      >
        <div className="container">
          <div className="w-full h-auto py-5">
            <h3>Digite seus dados para efetuar login!</h3>
          </div>
          <div className="boxPesquisa">
            {/* Exibição do alerta dentro da boxPesquisa */}
            {alertMessage && alertType && (
              <div
                className={`alerta ${
                  alertType === "success" ? "alerta-success" : "alerta-error"
                } animate__animated animate__rubberBand`}
              >
                <p>{alertMessage}</p>
                <button
                  className="btnOk"
                  onClick={() => {
                    setAlertMessage(""); // Limpa o alerta ao clicar
                    if (alertType === "success") {
                      router.push("/loginPage"); // Redireciona após sucesso
                    }
                  }}
                >
                  OK
                </button>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                id="email"
                placeholder="Digite seu email"
                title="Digite seu email"
                maxLength={30}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoggedIn}
              />

              <div className="boxSenha">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="senha"
                  placeholder="Digite sua senha"
                  title="Digite sua senha"
                  maxLength={20}
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  disabled={isLoggedIn}
                />
                <i
                  onMouseDown={togglePasswordVisibility}
                  onMouseUp={() => setPasswordVisible(false)}
                  onMouseLeave={() => setPasswordVisible(false)}
                  className="cursor-pointer"
                >
                  {passwordVisible ? (
                    <MdOutlineVisibility />
                  ) : (
                    <MdOutlineVisibilityOff />
                  )}
                </i>
              </div>

              <button
                type="submit"
                className="btn flex items-center gap-2"
                disabled={isLoggedIn}
              >
                <span className="btnText">Login</span>
              </button>
            </form>
          </div>

          <div className="boxH3">
            <span className="txtBranco">Ainda não é cadastrado?</span>
            <Link href="cadastro">
              <span className="cliqueAqui"> Clique aqui!</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
