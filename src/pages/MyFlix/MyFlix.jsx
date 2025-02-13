import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Container from "./components/container/Container";
import "./MyFlixStyle.css";
import { useMovies } from "../../contexts/allMovies";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useAuthenticator } from "../../contexts/login";


function MyFlix() {
  const { allMovies, setAllMovies } = useMovies();
  const todosMovies = allMovies;
  const { isSuccess, setisSuccess, isSuccessType, User } = useAuthenticator();

useEffect(()=>{
if(isSuccess){


  if(isSuccessType==='logado'){
    
      toast(`Seja bem vindo ${User.name}`, {
        autoClose: 5000, // Duração do toast (5 segundos)
        hideProgressBar: true, // Mostrar barra de progresso
        closeButton: true, // Mostrar botão de fechar
        pauseOnHover: true, // Pausar o tempo quando o mouse estiver sobre o toast
        style: {
          backgroundColor: "#28a745", // Cor de fundo verde 
          color: "white", // Cor do texto
          fontWeight: "bold", // Texto em negrito
        },
      });
  }


}

},isSuccess)
console.log(isSuccessType)

  return (
    <div>
      <Header allMovies={todosMovies} setMovies={setAllMovies} />
      <Banner />
      <Container allMovies={todosMovies} />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default MyFlix;
