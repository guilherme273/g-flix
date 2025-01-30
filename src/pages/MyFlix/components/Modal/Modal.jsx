import { useState } from "react";
import ModalComponent from "./ModalComponent";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button onClick={() => setIsOpen(true)}>Abrir Modal</button>

      {isOpen && (
        <ModalComponent onClose={() => setIsOpen(false)}></ModalComponent>
      )}
    </div>
  );
}

export default Modal;
