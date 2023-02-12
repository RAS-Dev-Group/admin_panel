import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.scss";
import PropTypes from "prop-types";
import { X } from 'react-feather';

const EditModal = ({ onClose, show, title, content }) => {
  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={onClose}>
        <div className="edit-modal modal-content" onClick={e => e.stopPropagation()}>
          <button className="btn-modal-close" onClick={onClose}><X /></button>
          <div className="text-center modal-header">
            <label className="modal-title">{title}</label>
          </div>
          {content}
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

EditModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default EditModal;