import SectionRegister from "../MyFlix/components/SectionContainer/SectionRegister";
import "./Register.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function Register() {
  const img = {
    backgroundImage: "url('/img/login.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };
  return (
    <>
      <div className="all-body" style={img}>
        <SectionRegister />
        <ToastContainer />
      </div>
    </>
  );
}

export default Register;
