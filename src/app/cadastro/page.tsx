"use client"; // Marcar o componente como Client Component

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import BtnCadastrar from "@/components/btnCadastrar";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import CryptoJS from "crypto-js";
import { useRouter } from "next/navigation"; // Importa o hook para navegação

// Definindo a interface para os dados do formulário
interface FormData {
  nome: string;
  sobreNome: string;
  email: string;
  telefone: string;
  cep: string;
  endereco: string;
  bairro: string;
  cidade: string;
  estado: string;
  senha: string;
  repitaSenha: string;
}

export default function Cadastro() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [repitaSenhaVisivel, setRepitaSenhaVisivel] = useState(false);

  const router = useRouter(); // Inicializa o hook de navegação

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Verifica se as senhas são iguais
    if (data.senha !== data.repitaSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    // Recupera os usuários já cadastrados do localStorage ou inicializa como um array vazio
    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    // Verifica se o email já está cadastrado
    const emailJaCadastrado = usuarios.some(
      (usuario: { email: string }) => usuario.email === data.email
    );

    if (emailJaCadastrado) {
      alert("Email já cadastrado!");
      // Redireciona para a página do usuário
      router.push("/user");
      return;
    }

    // Criptografa a senha usando SHA-256
    const senhaCriptografada = CryptoJS.SHA256(data.senha).toString(
      CryptoJS.enc.Base64
    );

    // Cria o novo usuário com a senha criptografada
    const novoUsuario = {
      nome: data.nome,
      sobreNome: data.sobreNome,
      email: data.email,
      telefone: data.telefone,
      cep: data.cep,
      endereco: data.endereco,
      bairro: data.bairro,
      cidade: data.cidade,
      estado: data.estado,
      senha: senhaCriptografada,
    };

    // Verifica se o novo usuário já existe, para não adicionar duplicatas
    const usuarioExistente = usuarios.some(
      (usuario: { email: string }) => usuario.email === novoUsuario.email
    );

    if (!usuarioExistente) {
      // Adiciona o novo usuário ao array de usuários
      usuarios.push(novoUsuario);

      // Atualiza o localStorage com os novos dados de usuários
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      // Exibindo os dados dos usuários atualizados no console (apenas os novos dados)
      console.log("Usuários cadastrados (atualizado):", usuarios);
    } else {
      alert("Este usuário já está cadastrado.");
    }

    // Exibindo os dados do novo usuário no console
    console.log("Usuário cadastrado com sucesso:", novoUsuario);
    alert("Cadastro realizado com sucesso!");

    // Limpa os campos do formulário
    reset();
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    let formattedValue = value;

    // Permitir apenas números nos campos "telefone" e "cep"
    if (id === "telefone" || id === "cep") {
      formattedValue = value.replace(/\D/g, "");

      if (id === "telefone" && formattedValue.length > 2) {
        formattedValue = `(${formattedValue.slice(0, 2)})${formattedValue.slice(
          2,
          7
        )}-${formattedValue.slice(7, 11)}`;
      }

      if (id === "cep" && formattedValue.length > 5) {
        formattedValue = `${formattedValue.slice(0, 5)}-${formattedValue.slice(
          5,
          8
        )}`;
      }
    }

    setValue(id as keyof FormData, formattedValue); // Atualiza o valor do campo no React Hook Form

    // Buscar o endereço automaticamente pelo CEP
    if (id === "cep" && formattedValue.length === 9) {
      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${formattedValue.replace("-", "")}/json/`
        );
        const data = await response.json();

        if (!data.erro) {
          setValue("endereco", data.logradouro);
          setValue("bairro", data.bairro);
          setValue("cidade", data.localidade);
          setValue("estado", data.uf);
        } else {
          alert("CEP inexistente!"); // Exibe o alerta
          setValue("cep", ""); // Limpa o campo de CEP
          e.target.focus(); // Reposiciona o cursor no campo de CEP
        }
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
        alert("Erro ao buscar CEP.");
      }
    }
  };

  return (
    <>
      <Header />
      <section
        id='cadastroImg'
        className='w-full flex flex-wrap p-[100px_50px] bg-center bg-no-repeat bg-cover h-screen overflow-hidden items-start justify-start'
        style={{ backgroundImage: "url('../imagens/img22.png')" }}
      >
        <div className='container'>
          <div className='w-full h-auto py-5'>
            <h3>Cadastro do candidato</h3>
          </div>
          <div className='boxCadastro'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type='text'
                id='nome'
                placeholder='Nome'
                title='Nome'
                required
                maxLength={30}
                {...register("nome", { required: true })}
              />
              {errors.nome && <span>Nome é obrigatório</span>}

              <input
                type='text'
                id='sobreNome'
                placeholder='Sobrenome'
                title='Sobrenome'
                required
                maxLength={30}
                {...register("sobreNome", { required: true })}
              />
              {errors.sobreNome && <span>Sobrenome é obrigatório</span>}

              <input
                type='email'
                id='email'
                placeholder='Email'
                title='Email'
                required
                maxLength={30}
                {...register("email", { required: true })}
              />
              {errors.email && <span>Email é obrigatório</span>}

              <input
                type='text'
                id='telefone'
                placeholder='Telefone'
                title='Telefone'
                required
                maxLength={15}
                {...register("telefone", { required: true })}
                onChange={handleInputChange}
              />
              {errors.telefone && <span>Telefone é obrigatório</span>}

              <input
                type='text'
                id='cep'
                placeholder='CEP'
                title='CEP'
                required
                maxLength={9}
                {...register("cep", { required: true })}
                onChange={handleInputChange}
              />
              {errors.cep && <span>CEP é obrigatório</span>}

              <input
                type='text'
                id='endereco'
                placeholder='Endereço'
                title='Endereço'
                required
                maxLength={30}
                disabled
                {...register("endereco", { required: true })}
              />
              {errors.endereco && <span>Endereço é obrigatório</span>}

              <input
                type='text'
                id='bairro'
                placeholder='Bairro'
                title='Bairro'
                required
                maxLength={30}
                disabled
                {...register("bairro", { required: true })}
              />
              {errors.bairro && <span>Bairro é obrigatório</span>}

              <input
                type='text'
                id='cidade'
                placeholder='Cidade'
                title='Cidade'
                required
                maxLength={30}
                disabled
                {...register("cidade", { required: true })}
              />
              {errors.cidade && <span>Cidade é obrigatória</span>}

              <input
                type='text'
                id='estado'
                placeholder='Estado'
                title='Estado'
                required
                maxLength={30}
                disabled
                {...register("estado", { required: true })}
              />
              {errors.estado && <span>Estado é obrigatório</span>}

              <div className='boxSenha'>
                <input
                  type={senhaVisivel ? "text" : "password"}
                  id='senha'
                  placeholder='Digite sua senha'
                  title='Senha'
                  required
                  maxLength={20}
                  className='flex-grow focus:outline-none'
                  {...register("senha", { required: true })}
                />
                <i
                  className='cursor-pointer'
                  onMouseDown={() => setSenhaVisivel(true)}
                  onMouseUp={() => setSenhaVisivel(false)}
                >
                  {senhaVisivel ? (
                    <MdOutlineVisibility />
                  ) : (
                    <MdOutlineVisibilityOff />
                  )}
                </i>
              </div>

              <div className='boxSenha'>
                <input
                  type={repitaSenhaVisivel ? "text" : "password"}
                  id='repitaSenha'
                  placeholder='Repita a sua senha'
                  title='Repita Senha'
                  required
                  maxLength={20}
                  className='flex-grow focus:outline-none'
                  {...register("repitaSenha", { required: true })}
                />
                <i
                  className='cursor-pointer'
                  onMouseDown={() => setRepitaSenhaVisivel(true)}
                  onMouseUp={() => setRepitaSenhaVisivel(false)}
                >
                  {repitaSenhaVisivel ? (
                    <MdOutlineVisibility />
                  ) : (
                    <MdOutlineVisibilityOff />
                  )}
                </i>
              </div>

              <div className='boxButton'>
                <BtnCadastrar />
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
