import { AtSign, CircleUserRound, LockKeyhole } from "lucide-react";
import "./SectionLoginStyle.css";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuthenticator } from "../../../../contexts/login";

import {useEffect, useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SectionLogin() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const { logar, logado, isSuccess, setisSuccess } = useAuthenticator();
  const [error, setError] = useState(null);


  const makeRequest = async (data) => {
    const msg = await logar(data);
    setError(msg);
    if (error) {
      toast(error, {
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

useEffect(()=>{

if(isSuccess)
{
  toast('Cadastro Realizado Com Sucesso!', {
    autoClose: 5000, // Duração do toast (5 segundos)
    hideProgressBar: true, // Mostrar barra de progresso
    closeButton: true, // Mostrar botão de fechar
    pauseOnHover: true, // Pausar o tempo quando o mouse estiver sobre o toast
    style: {
      backgroundColor: "#28a745", // Cor de fundo verde 
      color: "white", // Cor do texto
      fontWeight: "bold", // Texto em negrito
    },
  });
}

})


  if (logado) {
    return <Navigate to="/" />;
  } else {
    return (
      <>
        <div className="div-login">
          <h2>G Flix</h2>

          <form
            onSubmit={handleSubmit(makeRequest)}
            className="formulario-login"
          >
            <CircleUserRound
              className="icon-user"
              size={130}
              strokeWidth={0.5}
            />
            <div>
              <div className="div-input-login">
                <AtSign className={"key"} size={35} strokeWidth={0.5} />
                <input
                  type="text"
                  placeholder={"Login"}
                  {...register("e_mail", { required: true })}
                />
              </div>
              {errors?.e_mail?.type === "required" && (
                <p className="p-alert">E_mail obrigatório</p>
              )}
            </div>

            <div>
              <div className="div-input-senha">
                <LockKeyhole className="locke" size={35} strokeWidth={0.5} />
                <input
                  type="password"
                  placeholder="Senha"
                  {...register("password", { required: true })}
                />
              </div>
              {errors?.password?.type === "required" && (
                <p className="p-alert">Senha obrigatória</p>
              )}
            </div>
            <button type="submit">Entrar</button>
          </form>

          <div className="register">
            <p className="p">
              Ainda não possui conta
              <Link to={"/register"} className="a-no-p">
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
     
      </>
    );
  }
}

export default SectionLogin;
