import { AtSign, Lock, LockKeyhole, User } from "lucide-react";
import { useForm } from "react-hook-form";
import "./SectionRegister.css";
import { Link, Navigate } from "react-router-dom";

import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthenticator } from "../../../../contexts/login";


function SectionRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const [cadastrado, setcadastrado] = useState(false);
  const {isSuccess, setisSuccess, setisSuccessType} = useAuthenticator();




  const makeRequest = async (data) => {
    const json = JSON.stringify(data);

    const response = await fetch("https://mybackend.eco.br/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Adiciona o cabeçalho Content-Type
      },
      body: json,
    });

    if (response.ok) {
      setisSuccess(true)
      setisSuccessType('cadastrado')
      setcadastrado(true)
      reset();
    } else {
      const errorData = await response.json();

      toast(errorData.msg, {
        autoClose: 5000, // Duração do toast (5 segundos)
        hideProgressBar: true, // Mostrar barra de progresso
        closeButton: true, // Mostrar botão de fechar
        pauseOnHover: true, // Pausar o tempo quando o mouse estiver sobre o toast
        style: {
          backgroundColor: "#dc3545", // Cor de fundo vermelha (para erro)
          color: "white", // Cor do texto
          fontWeight: "bold", // Texto em negrito
        },
      });
    }
  };
  const matchPassword = watch("password");
  if (cadastrado) {
    return <Navigate to="/login"  />;
  } else {
    return (
      <>
        <div className="div-register">
          <h5>Cadastre-se</h5>

          <form
            onSubmit={handleSubmit(makeRequest)}
            className="formulario-register"
          >
            <div className="div-envolvente">
              <label htmlFor="name">Digite um nome:</label>
              <div className="div-input-and-icon">
                <User className="icon" size={35} strokeWidth={0.5} />
                <input
                  id="name"
                  type="text"
                  placeholder="Nome"
                  {...register("name", { required: true })}
                />
              </div>
              <div>
                {errors?.name?.type === "required" && (
                  <p className="p-alert">nome obrigatório</p>
                )}
              </div>
            </div>

            <div className="div-envolvente">
              <label htmlFor="e_mail">Digite um email:</label>
              <div className="div-input-and-icon">
                <AtSign className="icon" size={35} strokeWidth={0.5} />
                <input
                  id="e_mail"
                  type="text"
                  placeholder="Login"
                  {...register("e_mail", { required: true })}
                />
              </div>
              <div>
                {errors?.e_mail?.type === "required" && (
                  <p className="p-alert">e-mail obrigatório</p>
                )}
              </div>
            </div>
            <div className="div-envolvente">
              <label htmlFor="password">Digite a senha:</label>
              <div className="div-input-and-icon">
                <Lock className="icon" size={35} strokeWidth={0.5} />
                <input
                  id="password"
                  type="password"
                  placeholder="Senha"
                  {...register("password", { required: true })}
                />
              </div>
              <div>
                {errors?.password?.type === "required" && (
                  <p className="p-alert">senha obrigatória</p>
                )}
              </div>
            </div>
            <div className="div-envolvente">
              <label htmlFor="confirmPassword">Confirme a Senha:</label>
              <div className="div-input-and-icon">
                <LockKeyhole className="icon" size={35} strokeWidth={0.5} />

                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirma a Senha"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => value === matchPassword,
                  })}
                />
              </div>
              <div>
                {errors?.confirmPassword?.type === "required" && (
                  <p className="p-alert">confirmação de senha obrigatória</p>
                )}
                {errors?.confirmPassword?.type === "validate" && (
                  <p className="p-alert">senhas não conferem</p>
                )}
              </div>
            </div>

            <button type="submit">Registrar</button>
            <div className="login">
              <p className="p">
                Já possui conta?
                <Link to={"/login"} className="a-no-p">
                  Clique aqui para entrar
                </Link>
              </p>
            </div>
          </form>
        </div>
  
        
      </>
    );
  }
}

export default SectionRegister;
