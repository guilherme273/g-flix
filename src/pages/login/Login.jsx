import SectionLogin from "../MyFlix/components/SectionLogin/SectionLogin";
import "./LoginStyle.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";



function Login() {


  const img = {
    backgroundImage: "url('/img/login.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };


  return (
    <>
      <section className="all-body" style={img}>
        <SectionLogin  />
        <ToastContainer />
      </section>
    </>
  );

}

export default Login;
