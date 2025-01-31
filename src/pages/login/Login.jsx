import SectionLogin from "../MyFlix/components/SectionLogin/SectionLogin";
import "./LoginStyle.css";
function Login() {
  const img = {
    backgroundImage: "url('/assets/images/login.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };
  return (
    <>
      <section className="all-body" style={img}>
        <SectionLogin />
      </section>
    </>
  );
}

export default Login;
