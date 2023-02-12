import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.scss";
import PropTypes from "prop-types";
import { X } from 'react-feather';

const Modal = ({ onClose, show, content, contentClassName, hasCloseBtn = true }) => {
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
        <div className={"relative modal-content " + (contentClassName ? contentClassName : 'edit-modal')} onClick={e => e.stopPropagation()}>
          {hasCloseBtn ? <button className="btn-modal-close" onClick={onClose}><X /></button> : ''}
          {content}
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default Modal;