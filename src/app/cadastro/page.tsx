"use client"; // Marcar o componente como Client Component

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import BtnCadastrar from "@/components/btnCadastrar";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";

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
    formState: { errors },
  } = useForm<FormData>();
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [repitaSenhaVisivel, setRepitaSenhaVisivel] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (data.senha !== data.repitaSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      // Enviar todos os dados para o backend
      const response = await fetch("/api/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data), // Enviar todos os dados, não apenas a senha
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Erro ao enviar dados.");
    }
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
