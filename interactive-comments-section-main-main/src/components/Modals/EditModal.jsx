import React from "react";
import Modal from "./Modal";

function EditModal(props) {
  return (
    <div>
      {props.showEditModal === true ? (
        <Modal>This is an edit Modal</Modal>
      ) : (
        <></>
      )}
    </div>
  );
}

export default EditModal;
