import { useContext, createContext, useState, useEffect } from "react";
import { useAuthenticator } from "./login";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const LikesContext = createContext();

export const Likes = ({ children }) => {
  const [likes, setLikes] = useState([]);
  const { getUser, setisSuccessType, setisSuccess, User } = useAuthenticator();
  const takeLikes = async (id_user) => {
    const response = await fetch(
      `https://mybackend.eco.br/like?iduser=${id_user}`,
      {
        method: "GET",
      }
    );

    if (response.ok) {
      return response.json();
    }
  };

  useEffect(() => {
    const x = async () => {
      const userSTR = await getUser();
      const userOBJ = await JSON.parse(userSTR);
      const arrayLikes = await takeLikes(userOBJ.id);

      setLikes(arrayLikes);
    };
    x();
    console.log("mudou usuario");
  }, [User]);

  const makeLike = async (id_movie, id_user) => {
    const jsonOBJ = {
      id_movie: id_movie,
      id_user: id_user,
    };
    const json = JSON.stringify(jsonOBJ);
    const response = await fetch("https://mybackend.eco.br/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: json,
    });

    if (!response.ok) {
      console.log("not ok");
      return;
    }
    const newLikes = await takeLikes(id_user);
    setLikes(newLikes);
    toast("Video adicionado a lista de favoritos!", {
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
  };

  const unMakeLike = async (id_movie, id_user) => {
    const jsonOBJ = {
      id_movie: id_movie,
      id_user: id_user,
    };
    const json = JSON.stringify(jsonOBJ);
    const response = await fetch("https://mybackend.eco.br/like", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: json,
    });
    if (!response.ok) {
      console.log("not ok");
    }
    const newLikes = await takeLikes(id_user);
    setLikes(newLikes);
    toast("Video removido da lista de favoritos!", {
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
  };
  return (
    <LikesContext.Provider
      value={{ unMakeLike, makeLike, takeLikes, likes, setLikes }}
    >
      {children}
    </LikesContext.Provider>
  );
};

export const useLikes = () => {
  const context = useContext(LikesContext);

  if (!context) {
    throw new Error(
      "useAuthenticator must be used within an AuthenticatorProvider"
    );
  }
  return context;
};
