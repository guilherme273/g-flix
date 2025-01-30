import SectionRegister from "../MyFlix/components/SectionContainer/SectionRegister";
import "./Register.css";
function Register() {
  const img = {
    backgroundImage: "url('/public/img/login.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };
  return (
    <>
      <div className="all-body" style={img}>
        <SectionRegister />
      </div>
    </>
  );
}

export default Register;
