import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import "./DivCardStyle.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useLikes } from "../../../../contexts/likes";
import { useAuthenticator } from "../../../../contexts/login";

function DivCards({ movies, title = "" }) {
  const cards = useRef(null);
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

  const scrolLeft = (e) => {
    e.preventDefault();
    cards.current.scrollLeft -= cards.current.offsetWidth;
  };
  const scrolRigth = (e) => {
    e.preventDefault();
    cards.current.scrollLeft += cards.current.offsetWidth;
  };
  return (
    <div className="div-card">
      <h2>{title}</h2>
      <div className="cards" ref={cards}>
        {movies.map((movie) => {
          const laicado = likes.some((like) => like.id_movie === movie.id);

          return (
            <div className="div-icon-and-link-img" key={movie.id}>
              <Link
                to={"/assistir"}
                state={{
                  listMovies: movies,
                  movieId: movie.id,
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

      <div className="buttons">
        <button onClick={(e) => scrolLeft(e)}>
          <ChevronLeft size={40} />
        </button>
        <button onClick={(e) => scrolRigth(e)}>
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}

export default DivCards;
