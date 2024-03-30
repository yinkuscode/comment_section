import React from "react";
import Modal from "./Modal.jsx";

function DeleteModal(props) {
  console.log(props);
  return (
    <div>
      {props.showModal === true ? <Modal>this is a delete Modal</Modal> : <></>}
    </div>
  );
}

export default DeleteModal;
