import React from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
const Backdrop = ({ onClick }) => {
  return <div onClick={onClick} className={styles.backdrop}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const portalEl = document.getElementById("overlays");

const Modal = ({ children, onClickHide }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={onClickHide} />, portalEl)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalEl)}
    </React.Fragment>
  );
};

export default Modal;
