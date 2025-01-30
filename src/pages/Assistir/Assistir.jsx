import { useLocation } from "react-router-dom";
import ContainerAssistir from "../MyFlix/components/ContainerAssistir/ContainerAssistir";
import Footer from "../MyFlix/components/footer/Footer";
import Header from "../MyFlix/components/header/Header";
import DivCards from "../MyFlix/components/divCard/DivCards";
import { useMovies } from "../../contexts/allMovies";

function Assistir() {
  const location = useLocation();
  const { movieId, valueInputSearch, cat } = location.state || {};
  const category = cat;
  const { allMovies } = useMovies();

  return (
    <div>
      <Header allMovies={allMovies} valueInputSearch={valueInputSearch} />
      <ContainerAssistir movieId={movieId} />
      <DivCards title={category} movies={allMovies} allMovies={allMovies} />;
      <Footer />
    </div>
  );
}

export default Assistir;
