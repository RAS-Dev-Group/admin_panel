import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ModalTask = (props) => {
  return (
    <div className="more-modal" style={{display: props.open? 'block' : 'none'}}>
    <div className="modal-task">
      <label className="block text-center title">ADD NEW TASK</label>
      <input
        className="block text-center w-full mt-8 p-2.5"
        placeholder="input task name"
      />
      <textarea
        className="block w-full p-3 mt-5 text-center"
        placeholder="input description here"
        rows={5}
      />
      <button className="block w-full p-2 mt-5" onClick={props.taskModalClose}>ADD</button>
      <div className="text-center mt-14">
        <FontAwesomeIcon icon={faChevronUp} />
      </div>
    </div>
    </div>
  );
};

export default ModalTask;
