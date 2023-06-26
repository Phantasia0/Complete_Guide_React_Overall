import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

type BackdropType = {
  onClose: () => void;
};
const Backdrop: React.FC<BackdropType> = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose}></div>;
};

type ModalOverlayType = {
  children: ReactNode;
};
const ModalOverlay: React.FC<ModalOverlayType> = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  const portalElement = document.getElementById("overlays") as HTMLElement;

  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
