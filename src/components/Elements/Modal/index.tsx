import React, { FunctionComponent } from "react";
import { IModal } from "../../../utils/interfaces/interfaces";
import "./Modal.scss";

const Modal: FunctionComponent<IModal> = ({ children, domRef }) => {
  return (
    <div className="Modal" ref={domRef}>
      {children}
    </div>
  );
};

export default Modal;
