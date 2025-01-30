import { CircleAlert, CircleX } from "lucide-react";
import "./AlertStyle.css";

function Alert({ fechar, msg, err }) {
  const close = () => {
    fechar();
    err();
  };
  return (
    <section className="section-alert">
      <div className="alert">
        <button onClick={close} className="close">
          <CircleX className="p" size={25} />
        </button>
        <CircleAlert className="icon-alert" color="red" size={100} />
        <div className="alert-content">
          <p className="p">{`${msg}!`}</p>
        </div>
      </div>
    </section>
  );
}

export default Alert;
