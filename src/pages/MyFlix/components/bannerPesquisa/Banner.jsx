import { useState, useEffect, useRef } from "react";
import "./BannerStyle.css";

function Banner({ allMovies, setMoviesSearch }) {
  const [imgs, setImgs] = useState("home");
  const valueInputSearch = useRef("");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setImgs((prevImg) => {
        if (prevImg === "home") return "favoritos";
        if (prevImg === "favoritos") return "home";
      });
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="section-banner">
      <div className="div-input-pesquisa">
        <span className="g">
          <img src="/public/img/logo.png" alt="" />
        </span>
        <input
          type="text"
          ref={valueInputSearch}
          placeholder="pesquisar"
          className="input-pesquisa"
          onChange={filtrarBusca}
        />
      </div>

      <div
        className={`banner-img ${imgs === "home" ? "active" : ""}`}
        style={{ backgroundImage: "url(/img/banner-home.png)" }}
      ></div>

      <div
        className={`banner-img ${imgs === "favoritos" ? "active" : ""}`}
        style={{ backgroundImage: "url(/img/banner-favoritos.png)" }}
      ></div>
    </section>
  );

  function filtrarBusca() {
    const valorInputMinusculo = valueInputSearch.current.value.toLowerCase();

    const newAllMovies = allMovies.filter((video) => {
      const title = video.title.toLowerCase();
      const category = video.category.toLowerCase();
      return (
        category === valorInputMinusculo || title.includes(valorInputMinusculo)
      );
    });
    setMoviesSearch(newAllMovies);
  }
}

export default Banner;
