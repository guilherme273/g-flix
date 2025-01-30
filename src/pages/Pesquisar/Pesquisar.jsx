import BannerPesquisa from "../MyFlix/components/bannerPesquisa/Banner";
import Footer from "../MyFlix/components/footer/Footer";
import Header from "../MyFlix/components/header/Header";
import ContainerSearch from "../MyFlix/components/ContainerSearch/ContainerSearch";
import { useState } from "react";
import { useMovies } from "../../contexts/allMovies";

function Pesquisar() {
  const { allMovies, setMovies } = useMovies();
  const [moviesSearch, setMoviesSearch] = useState(allMovies);

  return (
    <div>
      <Header allMovies={allMovies} />
      <BannerPesquisa
        allMovies={allMovies}
        moviesSearch={moviesSearch}
        setMoviesSearch={setMoviesSearch}
      />
      <ContainerSearch
        allMovies={allMovies}
        moviesSearch={moviesSearch}
        setMoviesSearch={setMoviesSearch}
        setMovies={setMovies}
      />
      <Footer />
    </div>
  );
}

export default Pesquisar;
