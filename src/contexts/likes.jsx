import { useContext, createContext, useState, useEffect } from "react";
import { useAuthenticator } from "./login";

const LikesContext = createContext();

export const Likes = ({ children }) => {
  const [likes, setLikes] = useState([]);
  const { getUser } = useAuthenticator();
  const takeLikes = async (id_user) => {
    const response = await fetch(
      `https://54.226.91.49/like?iduser=${id_user}`,
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
  }, []);

  const makeLike = async (id_movie, id_user) => {
    const jsonOBJ = {
      id_movie: id_movie,
      id_user: id_user,
    };
    const json = JSON.stringify(jsonOBJ);
    const response = await fetch("https://54.226.91.49/like", {
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
  };

  const unMakeLike = async (id_movie, id_user) => {
    const jsonOBJ = {
      id_movie: id_movie,
      id_user: id_user,
    };
    const json = JSON.stringify(jsonOBJ);
    const response = await fetch("https://54.226.91.49/like", {
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
  };
  return (
    <LikesContext.Provider value={{ unMakeLike, makeLike, takeLikes, likes }}>
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
