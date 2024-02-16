import React from "react";

function Modal({ isModalOpen, setIsModalOpen, children }) {
  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <div>
      {isModalOpen ? <div className="bg-red-500">{children}</div> : null}
    </div>
  );
}

export default Modal;
