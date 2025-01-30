import { Link } from "react-router-dom";
import "./ContainerSearchStyle.css";
import { Heart } from "lucide-react";
import { useLikes } from "../../../../contexts/likes";
import { useAuthenticator } from "../../../../contexts/login";
function ContainerSearch({ allMovies, moviesSearch }) {
  const { makeLike, likes, unMakeLike } = useLikes();
  const { getUser } = useAuthenticator();

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
  return (
    <div className="container-search">
      {allMovies === moviesSearch ? (
        <h1>{`Todos os videos (total de ${allMovies.length})`}</h1>
      ) : (
        <h1>{`${moviesSearch.length} Resultados Encontrados`}</h1>
      )}

      <div className="todos-os-videos">
        {moviesSearch.map((movie) => {
          const laicado = likes.some((like) => like.id_movie === movie.id);
          return (
            <div key={movie.id} className="div-icon-and-link-img">
              <Link
                to={"/assistir"}
                state={{
                  listMovies: moviesSearch,
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
    </div>
  );
}

export default ContainerSearch;
