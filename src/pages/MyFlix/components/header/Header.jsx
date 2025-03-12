import { Link } from "react-router-dom";
import "./HeaderStyle.css";
import { useAuthenticator } from "../../../../contexts/login";
import { useState } from "react";
import { AlignJustify, LogOut } from "lucide-react";

function Header({ allMovies }) {
  const { deslogar, logado } = useAuthenticator();
  const sair = () => {
    deslogar();
  };

  const [showMObileHeader, setShowMObileHeader] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowMObileHeader(!showMObileHeader)}
        className="button-mobile-header"
      >
        <AlignJustify className="icon-mobile-button" size={30} />
      </button>
      <header className={!showMObileHeader ? "header" : "header-mobile"}>
        <Link to="/" className="link-logo">
          <span className="g">G Flix</span>
        </Link>

        <nav className="nav">
          <Link to="/">Home</Link>

          <Link state={{ allMovies: allMovies }} to="/pesquisar">
            Pesquisar
          </Link>
          <Link to="/Favoritos">Favoritos</Link>
          <Link className="add-videos" to="/add-videos">
            Adicionar video
          </Link>
        </nav>
        {logado ? (
          <Link className="logout" onClick={() => sair()}>
            <LogOut className="icon-logout" />
            Sair
          </Link>
        ) : (
          ""
        )}
      </header>
    </>
  );
}

export default Header;
