import { Link } from "react-router-dom";

import { Heart } from "lucide-react";
import { useLikes } from "../../../../contexts/likes";
import { useAuthenticator } from "../../../../contexts/login";
import { useMovies } from "../../../../contexts/allMovies";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";




function SectionFavoritos() {
  const { makeLike, likes, unMakeLike } = useLikes();
  const { getUser } = useAuthenticator();
  const { allMovies } = useMovies();
  

  const deuLike = async (movie_id) => {
    const userSTR = await getUser();
    const userOBJ = await JSON.parse(userSTR);
    await makeLike(movie_id, userOBJ.id);
  };
  const disdeuLike = async (movie_id) => {
    const userSTR = await getUser();
    const userOBJ = await JSON.parse(userSTR);
    await unMakeLike(movie_id, userOBJ.id);
  };


  const filterMovies = (allMovies)=>{

        const ArrayLaicados = allMovies.filter((movie)=> {
            return likes.some((like)=>like.id_movie === movie.id);
        })

        return ArrayLaicados;

  }

  return (
    <div className="container-search">
            <h1>{`Adicionado Como Favoritos (${likes.length})`}</h1>

      <div className="todos-os-videos">
        {filterMovies(allMovies).map((movie) => {
          const laicado = likes.some((like) => like.id_movie === movie.id);
          return (
            <div key={movie.id} className="div-icon-and-link-img">
              <Link
                to={"/assistir"}
                state={{
                  listMovies: allMovies,
                  movieId: movie.id,
                  allMovies: allMovies,
                  cat: movie.category,
                }}
                className="image-container"
              >
                <img src={movie.cover} alt="Capa" className="image" />
              </Link>
              {laicado ? (
                <img
                  onClick={() => disdeuLike(movie.id)}
                  className="icon"
                  src="/public/img/coracao-preenchido.png"
                />
              ) : (
                <Heart
                  onClick={() => deuLike(movie.id)}
                  className="icon"
                  size={38}
                />
              )}
            </div>
          );
        })}
      </div>
      <ToastContainer />
    </div>
  );
}

export default SectionFavoritos;
