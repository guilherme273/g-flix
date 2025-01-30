import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Container from "./components/container/Container";
import "./MyFlixStyle.css";
import { useMovies } from "../../contexts/allMovies";

function MyFlix() {
  const { allMovies, setAllMovies } = useMovies();
  const todosMovies = allMovies;

  return (
    <div>
      <Header allMovies={todosMovies} setMovies={setAllMovies} />
      <Banner />
      <Container allMovies={todosMovies} />
      <Footer />
    </div>
  );
}

export default MyFlix;
