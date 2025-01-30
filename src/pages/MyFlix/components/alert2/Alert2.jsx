import { CircleAlert, CircleX } from "lucide-react";
import "./AlertStyle2.css";

function Alert2({ fechar }) {
  const close = () => {
    fechar();
  };
  return (
    <section className="section-alert2">
      <div className="alert">
        <button onClick={close} className="close">
          <CircleX className="p" color="white" size={25} />
        </button>
        <CircleAlert className="icon-alert" color="green" size={100} />
        <div className="alert-content">
          <p className="p">Cadastro Realizado!</p>
        </div>
      </div>
    </section>
  );
}

export default Alert2;
