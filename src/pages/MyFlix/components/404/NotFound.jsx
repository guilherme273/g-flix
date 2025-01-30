import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./NotFoundStyle.css";

function NotFound() {
  return (
    <div className="div-principal-not-found">
      <Header />
      <div className="container-not-found">
        <h1>Ops, conteúdo não localizado</h1>
        <div className="imagem-not-found">
          <img src="/public/img/404.png" alt="" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default NotFound;
