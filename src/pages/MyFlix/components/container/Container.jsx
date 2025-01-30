import DivCards from "../divCard/DivCards";
import "./ContainerStyle.css";

const categoryes = [
  "Geografia",
  "Como fazer e usar",
  "Astronomia e Geografia",
  "Climatologia, Meteorologia, Vegetação",
  "Geologia e Hidrografia",
];

function Container({ allMovies }) {
  function FilterMovies(type, allMovies) {
    return allMovies.filter((movie) => movie.category === type);
  }

  return (
    <section className="container">
      {categoryes.map((cat) => {
        return (
          <DivCards
            key={cat}
            title={cat}
            movies={FilterMovies(cat, allMovies)}
            allMovies={allMovies}
          />
        );
      })}
    </section>
  );
}

export default Container;
