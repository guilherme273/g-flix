import { createContext, useContext, useEffect, useState } from "react";

const allMoviesContext = createContext();

export const Movies = ({ children }) => {
  const [allMovies, setAllMovies] = useState([]);


  const atualizarMovies = async (data) => {
    try {
      const response = await fetch(
        "https://mybackend.eco.br/add-movie",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
        }
      );
      if (response.ok) {
      getMovies();
        return await response.json();
      } else {
       
        return await response.json();
      }
    } catch (error) {
      console.log(error);
    }

  }
  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://mybackend.eco.br/get-all-movies",
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();

        setAllMovies(data);
      } else {
        console.log("erro na busca ");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    
    getMovies();
  }, []);

  return (
    <allMoviesContext.Provider value={{ allMovies, setAllMovies, atualizarMovies }}>
      {children}
    </allMoviesContext.Provider>
  );
};

export const useMovies = () => {
  const context = useContext(allMoviesContext);

  if (!context) {
    throw new Error(
      "useAuthenticator must be used within an AuthenticatorProvider"
    );
  }
  return context;
};
